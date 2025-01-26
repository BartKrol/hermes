"use server";

import { signIn, signOut } from "@/auth";
import { getTranslations } from "next-intl/server";
import { zfd } from "zod-form-data";

const signInSchema = zfd.formData({ name: zfd.text() });

export async function signInAction(data: FormData) {
  const t = await getTranslations("Error");
  try {
    const { name } = signInSchema.parse(data);
    await signIn("credentials", { name, redirect: false });
  } catch (error) {
    console.error(error);
    return {
      message: t("invalid_credentials"),
    };
  }
}

export async function signOutAction() {
  await signOut();
}
