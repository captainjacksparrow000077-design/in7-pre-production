// ---------------------------------------------------------------------------
// Discovery-file verification over HTTP.
//
// Checks that the machine-readable files are actually served (not redirected to
// a homepage or returned as HTML) with the right status and content type. Point
// it at a running local production server (`npm run start`) or at a deployed
// origin after deploy.
//
// Usage:
//   npm run build && npm run start          # in one terminal
//   npm run verify:discovery                # in another (defaults to :3000)
//
//   npm run verify:discovery -- https://in7india.in
//   BASE_URL=https://in7india.in npm run verify:discovery
// ---------------------------------------------------------------------------

const baseUrl = (
  process.argv[2] ||
  process.env.BASE_URL ||
  "http://localhost:3000"
).replace(/\/$/, "");

const targets = [
  { path: "/llms.txt", type: /^text\/plain/i, body: "llms" },
  { path: "/llms-full.txt", type: /^text\/plain/i, body: "llms" },
  { path: "/humans.txt", type: /^text\/plain/i },
  { path: "/robots.txt", type: /^text\/plain/i },
  { path: "/sitemap.xml", type: /^(application|text)\/xml/i },
  { path: "/", type: /^text\/html/i },
];

let failed = 0;

console.log(`\n  Discovery verification against ${baseUrl}`);
console.log("  " + "=".repeat(72));

for (const target of targets) {
  const url = baseUrl + target.path;
  try {
    const res = await fetch(url, { redirect: "manual" });
    const contentType = res.headers.get("content-type") || "(none)";
    const statusOk = res.status === 200;
    const typeOk = target.type.test(contentType);
    let lineOk = statusOk && typeOk;

    if (target.body === "llms") {
      const body = await res.text();
      if (!body.startsWith("# ")) {
        lineOk = false;
        console.log(`      ! ${url} body does not start with a Markdown H1`);
      }
      if (/\/go(?![a-z0-9])/i.test(body)) {
        lineOk = false;
        console.log(`      ! ${url} body references the /go redirect`);
      }
    }

    if (!lineOk) failed++;
    console.log(
      `  ${lineOk ? "PASS" : "FAIL"}  ${String(res.status).padEnd(3)} ${contentType.padEnd(30)} ${url}`,
    );
  } catch (error) {
    failed++;
    console.log(`  FAIL  --- ${url}  (${error.message})`);
  }
}

console.log("");
if (failed) {
  console.log(`  ${failed} discovery check(s) failed.\n`);
  process.exit(1);
}
console.log("  All discovery checks passed.\n");
