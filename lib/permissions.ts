"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const isAuthenticated = async () => {
  const session = await auth();
  return session !== null;
};

export const checkAuthentication = async () => {
  if (!(await isAuthenticated())) {
    return redirect("/login");
  }
};
