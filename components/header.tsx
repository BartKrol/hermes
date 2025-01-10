import Link from "next/link";

export type HeaderProps = {
  name?: string;
};

export default function Header({ name }: HeaderProps) {
  return (
    <header className="shadow sticky top-0 z-50 pb-4">
      <div className="container mx-auto px-4 pt-4 pb-3 flex justify-between items-center border-b border-gray-200 bg-black">
        <h1 className="text-xl font-bold cursor-pointer">
          <Link href="/">Hermes</Link>
        </h1>
        {name && (
          <nav>
            <ul className="flex space-x-4">
              <li>{name}</li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
