#!/usr/bin/env node
/**
 * IN7 Game Portal — Build-time Image Optimization Pipeline
 *
 * What it does:
 *   1. Discovers all local raster images in /public (JPG, PNG, WebP)
 *   2. Generates optimized WebP output in /public/optimized/
 *   3. Skips already-optimized outputs (idempotent)
 *   4. Skips files already in /public/optimized/ to prevent recursive processing
 *   5. Reports: original size, output size, % saved, skipped files
 *   6. Exits with code 1 if critical errors occur
 *
 * Usage:
 *   node scripts/optimize-images.mjs
 *   (automatically run via package.json "prebuild" script)
 *
 * Adding new images:
 *   Drop them in /public/images/ (or subdirectory) and run the build.
 *   The script will pick them up automatically on the next run.
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'node:fs/promises';
import { join, extname, basename, dirname, relative } from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC_DIR = join(ROOT, 'public');
const OUTPUT_DIR = join(PUBLIC_DIR, 'optimized');
const SUPPORTED_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const QUALITY_WEBP = 82; // balanced quality/size
const MAX_WIDTH = 1920;   // never upscale beyond original; cap for large sources

let totalOriginalBytes = 0;
let totalOutputBytes = 0;
let processed = 0;
let skipped = 0;
let errors = 0;

/**
 * Recursively collect all image files under a directory.
 * Skips the output directory to prevent recursive processing.
 */
async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      // Never recurse into the output directory
      if (fullPath === OUTPUT_DIR) continue;
      files.push(...(await collectImages(fullPath)));
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (SUPPORTED_EXTS.has(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

/**
 * Format bytes to a human-readable string.
 */
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function optimizeImage(srcPath) {
  const relPath = relative(PUBLIC_DIR, srcPath);
  const name = basename(srcPath, extname(srcPath));
  const relDir = dirname(relPath);
  const outDir = join(OUTPUT_DIR, relDir);
  const outPath = join(outDir, `${name}.webp`);

  // Skip if output already exists (idempotent)
  if (existsSync(outPath)) {
    skipped++;
    return;
  }

  try {
    const srcStat = await stat(srcPath);
    const originalSize = srcStat.size;
    totalOriginalBytes += originalSize;

    await mkdir(outDir, { recursive: true });

    const img = sharp(srcPath);
    const meta = await img.metadata();

    // Never upscale; cap at MAX_WIDTH
    const resizeWidth = meta.width && meta.width > MAX_WIDTH ? MAX_WIDTH : undefined;

    const outputInfo = await img
      .resize(resizeWidth ? { width: resizeWidth, withoutEnlargement: true } : undefined)
      .webp({ quality: QUALITY_WEBP })
      .toFile(outPath);

    const outputSize = outputInfo.size;
    totalOutputBytes += outputSize;
    const saving = (((originalSize - outputSize) / originalSize) * 100).toFixed(1);

    console.log(
      `  ✓ ${relPath.padEnd(48)} ${formatBytes(originalSize).padStart(9)} → ${formatBytes(outputSize).padStart(9)}  (${saving}% saved)`
    );
    processed++;
  } catch (err) {
    console.error(`  ✗ ERROR processing ${relPath}: ${err.message}`);
    errors++;
  }
}

async function main() {
  console.log('\n🖼  IN7 Image Optimization Pipeline\n' + '='.repeat(72));

  let images;
  try {
    images = await collectImages(PUBLIC_DIR);
  } catch (err) {
    console.error(`Fatal: could not read ${PUBLIC_DIR}: ${err.message}`);
    process.exit(1);
  }

  if (images.length === 0) {
    console.log('No images found. Skipping optimization.');
    return;
  }

  console.log(`Found ${images.length} image(s). Processing…\n`);
  console.log(
    `  ${'Source'.padEnd(48)} ${'Original'.padStart(9)}   ${'Output'.padStart(9)}  Savings`
  );
  console.log('  ' + '-'.repeat(68));

  await Promise.all(images.map(optimizeImage));

  console.log('\n' + '='.repeat(72));
  console.log(`  Processed : ${processed}`);
  console.log(`  Skipped   : ${skipped} (already optimized)`);
  console.log(`  Errors    : ${errors}`);
  if (processed > 0) {
    const totalSaving = (((totalOriginalBytes - totalOutputBytes) / totalOriginalBytes) * 100).toFixed(1);
    console.log(`  Total in  : ${formatBytes(totalOriginalBytes)}`);
    console.log(`  Total out : ${formatBytes(totalOutputBytes)}`);
    console.log(`  Overall   : ${totalSaving}% reduction`);
  }
  console.log('');

  if (errors > 0) {
    console.error(`⚠  ${errors} image(s) failed to process. Check errors above.`);
    process.exit(1);
  }
}

main();
