import { signOutAction } from "@/actions/authAction";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="container mx-auto flex flex-row items-center justify-end py-4 border-t border-gray-200 px-4">
      <form action={signOutAction}>
        <button type="submit" className="text-sm">
          {t("logout")}
        </button>
      </form>
    </footer>
  );
}
