"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase-config";

import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  async function signIn() {
    const userCredential = await signInWithPopup(auth, provider);

    const idToken = await userCredential.user.getIdToken();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    if (response.status === 200) {
      router.push("/");
    }
  }

  return (
    <>
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}
