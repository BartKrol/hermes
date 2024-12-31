"use server";

import { signIn, signOut } from "@/auth";

export async function signInAction(data: FormData) {
  const name = data.get("name")?.toString().toLowerCase();
  try {
    await signIn("credentials", { name }, { redirectTo: "/" });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function signOutAction() {
  await signOut();
}
