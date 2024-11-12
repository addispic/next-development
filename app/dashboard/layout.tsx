"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    // state
    const [isSuccess,setIsSuccess] = useState(false)
  // hooks
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/auth/me");
        if (response.data.message === "authorized") {
          setIsSuccess(true)
        }
      } catch (err) {
        router.push("/");
      }
    })();
  }, []);
  if(!isSuccess){
    return <h1>Loading ....</h1>
  }
  return (
    <main>
      <header>Dashboard Header</header>
      {children}
    </main>
  );
}
