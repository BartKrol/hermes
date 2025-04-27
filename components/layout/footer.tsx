import { signOutAction } from "@/actions/authAction";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-gradient-to-b from-transparent to-black/10 backdrop-blur-sm border-t border-gray-800/30">
      <div className="container mx-auto flex flex-row items-center justify-between py-5 px-4">
        <div className="text-xs text-gray-400 opacity-70">HERMES MISSION</div>
        <form action={signOutAction}>
          <button
            type="submit"
            className="text-sm font-medium bg-black/20 hover:bg-black/30 transition-colors px-4 py-1.5 rounded-full text-blue-200 border border-blue-900/20"
          >
            {t("logout")} <span className="ml-1">→</span>
          </button>
        </form>
      </div>
    </footer>
  );
}
