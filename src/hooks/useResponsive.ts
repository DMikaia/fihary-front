"use client";

import { useEffect, useRef, useState } from "react";

export default function useResponsive() {
  const [width, setWidth] = useState<number>(0);
  const elementRef = useRef<HTMLImageElement | null>(null);

  const updateWidth = () => {
    if (elementRef.current) {
      setWidth(elementRef.current.width);
    }
  };

  useEffect(() => {
    if (elementRef.current) {
      setWidth(elementRef.current?.width);
    }
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [elementRef.current]);

  return { width, elementRef };
}
