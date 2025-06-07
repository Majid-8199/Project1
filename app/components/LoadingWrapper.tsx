'use client';

import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useLayoutEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Duration of loader

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className="relative">
      {children}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black transition-opacity duration-500 pointer-events-none">
          <Image
            src="/services/amer.webp"
            alt="Loading..."
            width={50}
            height={50}
            className="animate-spin"
          />
        </div>
      )}
    </div>
  );
}
