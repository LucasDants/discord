"use client";

import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase-config";

export function useAuth() {
  const [user, setUser] = useState(null);

  async function signIn() {
    try {
      const credential: any = await signInWithPopup(auth, provider);

      setUser(credential.user);

      const idToken = await credential.user.getIdToken();

      await fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });
    } catch (error: any) {
      alert(error?.message);
    }
  }

  return { user, signIn };
}
