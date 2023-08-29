"use client";

import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase-config";
import { useRouter } from "next/navigation";

export function useAuth() {
  const [user, setUser] = useState(null);

  const router = useRouter();

  async function signIn() {
    try {
      const credential: any = await signInWithPopup(auth, provider);

      const idToken = await credential.user.getIdToken();

      await fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      setUser(credential.user);

      router.replace("/main");
    } catch (error: any) {
      alert(error?.message);
    }
  }

  return { user, signIn };
}
