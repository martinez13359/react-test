export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10">
      <p>&copy; 2025 Haustierportal. Alle Rechte vorbehalten.</p>
      <ul className="flex gap-6 mt-2">
        <li><a href="/ueber_uns">Über uns</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
        <li><a href="/hilfe">Hilfe & Support</a></li>
        <li><a href="/anbieter">Anbieterseite</a></li>
        <li><a href="/login">Login für Haustierbesitzer</a></li>
      </ul>
    </footer>
  );
}
