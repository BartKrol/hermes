import { signInAction } from "@/actions/authAction";
import { isAuthenticated } from "@/lib/permissions";
import { redirect } from "next/navigation";
import Login from "./login";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function SignIn() {
  if (await isAuthenticated()) {
    redirect("/");
  }

  const t = await getTranslations("Login");

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-indigo-950/40 to-black text-white">
      <header className="pt-6 pb-2 px-4">
        <div className="w-full text-center">
          <h1 className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 alien-text-glow">
            HERMES MISSION
          </h1>
          <div className="text-xs text-indigo-300/70 mt-1 terminal-text tracking-wider">
            ALIEN ARTIFACT INTERFACE
          </div>
        </div>
      </header>

      <main className="flex flex-col flex-grow items-center justify-center px-6 -mt-10">
        <div className="w-full max-w-md backdrop-blur-md bg-black/40 p-6 rounded-xl border border-indigo-900/50 shadow-xl alien-box-glow">
          <div className="text-center mb-8 scan-line">
            <div className="inline-block rounded-full bg-indigo-900/20 p-5 border border-indigo-700/30 mb-4">
              <span className="text-4xl alien-flicker">🪐</span>
            </div>
            <h2 className="text-xl font-bold mb-1 alien-text-glow">
              {t("welcome")}
            </h2>
            <p className="text-sm text-indigo-300/80 terminal-text">
              ENTER CREDENTIALS TO ACCESS SYSTEM
            </p>
          </div>

          <Login onSignIn={signInAction} />

          <div className="mt-8 pt-5 text-center text-sm border-t border-indigo-900/30">
            <p className="text-indigo-300/70 terminal-text mb-2">
              {t("prepare")}
            </p>
            <Link
              className="font-medium text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 bg-black/30 px-4 py-2 rounded-full"
              href="/training"
            >
              <span>{t("here")}</span>
              <span className="text-xs">→</span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-xs text-indigo-400/50 terminal-text">
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent mx-auto mb-3"></div>
        HERMES CORPORATION • TOP SECRET
      </footer>
    </div>
  );
}
