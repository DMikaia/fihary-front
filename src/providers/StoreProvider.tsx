/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import store from "@/lib/redux/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<any>(store);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
