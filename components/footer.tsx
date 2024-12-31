import { signOutAction } from "@/actions/authAction";

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-end pt-2 pb-4 border-t border-gray-200">
      <form action={signOutAction}>
        <button type="submit" className="text-sm">
          Wyloguj
        </button>
      </form>
    </footer>
  );
}
