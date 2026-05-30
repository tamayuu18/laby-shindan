"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  fallbackEmoji: string;
  fallbackBg: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

export default function CharacterImage({
  src,
  alt,
  fallbackEmoji,
  fallbackBg,
  fill,
  width,
  height,
  className,
  priority,
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center text-7xl ${className ?? ""}`}
        style={{
          background: `linear-gradient(135deg, ${fallbackBg} 0%, #fff 100%)`,
          width: fill ? "100%" : width,
          height: fill ? "100%" : height,
        }}
      >
        {fallbackEmoji}
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className ?? ""}`}
        onError={() => setFailed(true)}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 200}
      height={height ?? 200}
      className={`object-cover ${className ?? ""}`}
      onError={() => setFailed(true)}
      priority={priority}
    />
  );
}
