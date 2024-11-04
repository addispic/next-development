import type { Metadata } from "next";

import "./globals.css";

// components
// header
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* container */}
        <div className="w-screen h-screen overflow-hidden">
          <div className="max-w-[720px] mx-auto h-screen flex flex-col py-1.5">
            {/* header */}
            <Header />
            {/* content */}
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
