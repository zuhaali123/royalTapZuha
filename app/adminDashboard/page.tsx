"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation"
export default function AdminDashboard() {
   const router = useRouter();

  useEffect(() => {
    // Redirect to /login on page load
    router.push("/adminDashboard/user-managment");
  }, [router]);
  
}