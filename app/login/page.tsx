import { signInAction } from "@/actions/authAction";
import { isAuthenticated } from "@/lib/permissions";
import { redirect } from "next/navigation";
import Login from "./login";

export default async function SignIn() {
  if (await isAuthenticated()) {
    redirect("/");
  }

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <main className="flex flex-col container mx-auto px-4 flex-grow gap-8 pt-2 items-center">
        <h1 className="text-xl font-semibold mt-2">
          Witaj w Panelu Misji Hermesa
        </h1>
        <Login onSignIn={signInAction} />
      </main>
    </div>
  );
}
