import React from 'react';

interface BackgroundTextureProps {
  className?: string;
  opacity?: number; // 0..1
  color?: string; // stroke color for SVG
  size?: number; // SVG tile size
  strokeWidth?: number | string;
}

export default function BackgroundTexture({
  className = '',
  opacity = 0.1,
  color = '#ffffff',
  size = 60,
  strokeWidth = 0.5,
}: BackgroundTextureProps) {
  const svg = encodeURIComponent(`
    <svg width='${size}' height='${size}' viewBox='0 0 ${size} ${size}' xmlns='http://www.w3.org/2000/svg'>
      <path d='M${size / 2} ${size * 0.0833333} L${size * 0.9166667} ${size / 2} L${size / 2} ${
    size * 0.9166667
  } L${size * 0.0833333} ${size / 2} Z' fill='none' stroke='${color}' stroke-width='${strokeWidth}'/>
    </svg>
  `);

  const bg = `url("data:image/svg+xml,${svg}")`;

  return (
    <div
      className={className}
      style={{
        backgroundImage: bg,
        backgroundRepeat: 'repeat',
        opacity,
      }}
    />
  );
}
