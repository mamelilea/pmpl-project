"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import RegisterForm from "@/components/auth/RegisterForm";
import Image from "next/image";

export default function RegisterPage() {
  const { loading, user } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (user && !loading) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading || user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 flex flex-col items-center justify-center px-10 md:px-20">
        <RegisterForm />
      </div>

      <div className="w-1/2 hidden md:flex flex-col items-center justify-center relative bg-white h-full">
        <Image
          src="/assets/logo/LogoLogin.png"
          alt="Agrowtify Logo"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
  );
}
