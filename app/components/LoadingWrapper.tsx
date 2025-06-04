'use client';

import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Trigger immediately before paint
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Duration of loader

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black">
        <Image
          src="/services/amer.png"
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
