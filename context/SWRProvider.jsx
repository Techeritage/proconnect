"use client";

import { SWRConfig } from "swr";
import fetcher from "@/services/fetcher";

export default function SWRProviders({ children }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        // refreshInterval: 3000,
        // revalidateIfStale: false,
        // revalidateOnFocus: false,
        // revalidateOnReconnect: false,
      }}
    >
      {children}
    </SWRConfig>
  );
}
