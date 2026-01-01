import { useTranslations } from "next-intl";
import Link from "next/link";

export type HeaderProps = {
  name?: string;
};

export default function Header({ name }: HeaderProps) {
  const t = useTranslations("Header");

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-to-r from-black via-slate-900/90 to-black backdrop-blur-md px-4 py-5 flex justify-between items-center border-b border-indigo-900/30 shadow-xl">
        <h1 className="text-xl font-bold text-white tracking-wide cursor-pointer relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <Link href="/" className="flex items-center relative">
            <span className="mr-1 text-2xl opacity-80">⊹</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400/80 to-purple-400/80 font-extrabold tracking-wider">
              HERMES
            </span>
          </Link>
        </h1>
        {name && (
          <nav>
            <div className="flex items-center space-x-2 text-white bg-black/40 px-3 py-1.5 rounded-md text-sm backdrop-blur-md border border-indigo-900/30 shadow-inner shadow-indigo-900/5">
              <span className="text-xs text-indigo-400/70">{t("agent")}</span>
              <span className="font-medium text-blue-100/90">{name}</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
