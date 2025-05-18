import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-rose-200 flex justify-between items-center px-6 py-4">
      <div className="logo">
        <Link href="/"><img src="/logo.png" alt="Haustierportal Logo" className="w-36" /></Link>
      </div>
      <nav>
        <ul className="flex gap-6 text-white font-bold">
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/login">Log-In</Link></li>
          <li><Link href="/anbieter" className="bg-blue-200 px-4 py-2 rounded">Sind Sie Anbieter/in?</Link></li>
        </ul>
      </nav>
    </header>
  );
}
