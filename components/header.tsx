export default function Header() {
  return (
    <header className="shadow sticky top-0 z-50 pb-4">
      <div className="container mx-auto px-4 pt-4 pb-3 flex justify-between items-center border-b border-gray-200">
        <h1 className="text-xl font-bold">Hermes</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>Logout</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
