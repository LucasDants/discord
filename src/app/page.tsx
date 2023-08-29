"use client";

import { useRouter } from "next/navigation";

import TrivagoLogo from "../assets/trivago-logo.svg";
import GoogleLogo from "../assets/google-logo.svg";
import Image from "next/image";
import { useAuth } from "@/hooks";

export default function SignIn() {
  const router = useRouter();

  const { signIn } = useAuth();

  return (
    <section className="flex flex-col min-h-screen">
      <main className="flex flex-1 flex-col justify-center items-stretch mx-auto gap-5">
        <Image
          src={TrivagoLogo}
          alt="Trivago"
          priority={true}
          className="self-start mb-4"
        />

        <h1 className="text-3xl font-semibold">
          Log in or create an
          <br />
          account
        </h1>

        <form className="flex flex-col">
          <label className="text-xs mb-1 font-semibold">
            Your email address
          </label>
          <input className="p-2 border border-gray-400 rounded-md gap-2" />

          <button className="flex mt-4 align-center justify-center p-2.5 border border-gray-400 bg-blue-700 text-white font-semibold rounded-md gap-2">
            Next
          </button>
        </form>

        <div className="flex items-center gap-2">
          <div className=" flex-1 border border-top border-t-gray-300" />
          OR
          <div className="flex-1 border border-t-gray-300" />
        </div>

        <button
          onClick={signIn}
          className="flex align-center  p-3.5 border border-gray-400 rounded-md gap-2"
        >
          <Image src={GoogleLogo} alt="Trivago" priority={true} />
          <span className="mx-auto">Continue with Google</span>
        </button>
      </main>
    </section>
  );
}
