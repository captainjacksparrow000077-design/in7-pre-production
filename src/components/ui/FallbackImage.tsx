'use client';
import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface FallbackImageProps extends ImageProps {
  fallbackType?: 'logo' | 'default';
}

export default function FallbackImage({ fallbackType = 'default', alt, ...props }: FallbackImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    if (fallbackType === 'logo') {
      return (
        <div className={`flex items-center justify-center font-black text-white bg-gradient-to-br from-brand-red to-brand-red-light rounded-lg shadow-[0_0_15px_rgba(229,9,20,0.5)] border border-brand-red-light/50 ${props.className || ''}`} style={{ width: props.width, height: props.height }}>
          IN7
        </div>
      );
    }
    return (
      <div className={`bg-gradient-to-br from-gray-900 to-gray-800 border border-[#D4AF37]/30 flex flex-col items-center justify-center text-xs text-brand-gold rounded ${props.className || ''}`} style={{ width: props.width, height: props.height }}>
        <span className="font-black text-xl mb-1 drop-shadow-md">IN7</span>
        <span className="opacity-70">{alt || 'Image'}</span>
      </div>
    );
  }

  return (
    <Image 
      {...props} 
      alt={alt}
      onError={() => setError(true)} 
    />
  );
}
