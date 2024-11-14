import React from "react";

// provide
import StoreProvider from "../StoreProvider";

// components
import Header from "@/components/notes/Header";
export default function CounterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-[720px] mx-auto h-screen overflow-hidden w-full p-3">
      <StoreProvider>
        <>
          {/* header */}
          <Header />
          <div>{children}</div>
        </>
      </StoreProvider>
    </main>
  );
}
