"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation"
export default function Home() {
   const router = useRouter();

  useEffect(() => {
    // Redirect to /login on page load
    router.push("/login");
  }, [router]);
  
}