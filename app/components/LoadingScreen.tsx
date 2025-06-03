"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      AOS.refresh(); // 🛠️ Refresh AOS after loading screen disappears
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-white dark:bg-black transition-opacity duration-300">
      <Image
        src={"/services/Amer.png"}
        alt="Loading"
        width={40}
        height={40}
        className="animate-spin"
      />
    </div>
  );
}
