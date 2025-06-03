'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay to show spinner for a brief moment (can be removed)
    const timeout = setTimeout(() => setMounted(true), 300);

    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black">
        <Image
          src="/services/Amer.png"
          alt="Loading..."
          width={50}
          height={50}
          className="animate-spin"
        />
      </div>
    );
  }

  return <>{children}</>;
}
