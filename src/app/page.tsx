"use client";

import { useRouter } from "next/navigation";

import TrivagoLogo from "../assets/trivago-logo.svg";
import GoogleLogo from "../assets/google-logo.svg";
import Image from "next/image";
import { useAuth } from "@/hooks";

export default function SignIn() {
  const router = useRouter();

  const { user, signIn } = useAuth();

  if (user) {
    router.push("/protected");
  }

  return (
    <section className="flex flex-col min-h-screen">
      <header className="bg-white px-4 py-1.5 border-b border-gray-400 flex">
        <Image src={TrivagoLogo} alt="Trivago" priority={true} />
      </header>
      <main className="flex flex-1 flex-col justify-center align-center">
        <button
          onClick={signIn}
          className="flex align-center justify-between p-3.5 self-center border border-gray-400 rounded-md gap-2"
        >
          <Image src={GoogleLogo} alt="Trivago" priority={true} />
          Continuar com o Google
        </button>
      </main>
    </section>
  );
}
