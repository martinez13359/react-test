import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [anbieter, setAnbieter] = useState<any[]>([]);
  const [services, setServices] = useState<string[]>([]);
const [orte, setOrte] = useState<string[]>([]);

useEffect(() => {
  fetch("/api/suchvorschlaege")
    .then(res => res.json())
    .then(data => {
      setServices(data.services);
      setOrte(data.orte);
    });
}, []);

useEffect(() => {
  fetch("/api/anbieter")
    .then(res => res.json())
    .then(data => setAnbieter(data))
    .catch(err => console.error("Fehler beim Laden der Anbieter:", err));
}, []);
  return (
    <>
      <Head>
        <title>Haustierportal</title>
        <meta name="description" content="Finde Hundesalons & Betreuungsangebote in deiner Nähe" />
      </Head>
      <Header />
      <main className="bg-rose-100 text-gray-800 min-h-screen">
      <section className="bg-[#f1c0c6] py-10 px-4 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
  {/* Linke Seite: Headline + Buttons + Suche */}
  <div className="md:w-1/2 flex flex-col gap-6">
  <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-snug text-center md:text-left">
  Finde Hundesalons & Betreuungsangebote in deiner Nähe
  </h1>
  

  {/* Termintyp + Servicetyp kombiniert */}
  <div className="flex flex-col items-center md:items-start gap-4 w-full">
    {/* Termintyp-Leiste */}
    <div className="w-full max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
      <button className="bg-white text-gray-700 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition text-sm sm:text-base">
        <i className="fas fa-home mr-2" /> Vor-Ort-Termin
      </button>
      <button className="bg-white text-gray-700 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition text-sm sm:text-base">
        <i className="fas fa-house-user mr-2" /> Hausbesuch/Abholung
      </button>
    </div>

    {/* Servicetyp-Leiste */}
    <div className="w-full bg-white shadow-md rounded-full px-6 py-4 flex flex-wrap sm:flex-nowrap items-center justify-center gap-3">
    <input
  type="text"
  list="services"
  placeholder="Fellpflege, Tagesbetreuung"
  className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none text-sm min-w-[160px]"
/>
<datalist id="services">
  {services.map((service, i) => (
    <option key={i} value={service} />
  ))}
</datalist>

<input
  type="text"
  list="orte"
  placeholder="Berlin, Charlottenburg"
  className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none text-sm min-w-[160px]"
/>
<datalist id="orte">
  {orte.map((ort, i) => (
    <option key={i} value={ort} />
  ))}
</datalist>
      <button className="bg-blue-200 text-white px-4 py-2 rounded hover:bg-blue-300 transition text-sm">
        <i className="fas fa-search mr-1" /> Suchen
      </button>
    </div>
  </div>
</div>


  {/* Rechte Seite: Bild */}
  <div className="md:w-1/2 text-center">
    <img
      src="/hund-katze.jpg"
      alt="Hund und Katze"
      className="max-w-xs sm:max-w-md w-full rounded-xl mx-auto"
    />
  </div>
</section>

<section className="flex flex-col md:flex-row justify-between gap-6 px-6 py-12 bg-white">
  {[
    {
      title: "Platzhalter Service",
      text: "Ihr Tier ist krank? Buchen Sie medizinische Services wie Notfallbehandlung, Impfung, Blutabnahme in einer Tierarzt-Praxis in Ihrer Nähe, per Hausbesuch oder Videotelefonat.",
      img: "/hund-krank.jpg"
    },
    {
      title: "Kosmetische Services",
      text: "Gönnen Sie sich und Ihrem Liebling einen Pflegeservice wie Fell-Pflege oder Klauen Schneiden in einem Salon in Ihrer Nähe oder per Hausbesuch.",
      img: "/hund-friseur.jpg"
    },
    {
      title: "Betreuung",
      text: "Suchen Sie regelmäßige oder einmalige Betreuung für Ihr Tier zum Beispiel für einen Urlaub oder den täglichen Mittagsspaziergang? Finden Sie vertrauensvolle und zuverlässige Anbieter.",
      img: "/birds-6910683_1280.jpg"
    }
  ].map((box, idx) => (
    <div key={idx} className="bg-blue-50 rounded-lg shadow-md p-6 text-center flex flex-col items-center w-full md:w-1/3">
      <img
        src={box.img}
        alt={box.title}
        className="w-[70%] h-[200px] object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold">{box.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{box.text}</p>
    </div>
  ))}
</section>
      </main>
      <Footer />
    </>
  );
}
