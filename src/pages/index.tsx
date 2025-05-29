import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Haustierportal</title>
        <meta name="description" content="Finde Tierärzte, Tier-Salons und vieles mehr in deiner Nähe" />
      </Head>
      <Header />
      <main className="bg-rose-100 text-gray-800 min-h-screen">
      <section className="bg-[#f1c0c6] py-10 px-4 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
  {/* Linke Seite: Headline + Buttons + Suche */}
  <div className="md:w-1/2 flex flex-col gap-6">
  <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-snug text-center md:text-left">
    Finde Tierärzte, Tier-Salons und vieles mehr in deiner Nähe
  </h1>

  {/* Termintyp + Servicetyp kombiniert */}
  <div className="flex flex-col items-center md:items-start gap-4 w-full">
    {/* Termintyp-Leiste */}
    <div className="w-full max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
      <button className="bg-white text-gray-700 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition text-sm sm:text-base">
        <i className="fas fa-home mr-2" /> Vor-Ort-Termin
      </button>
      <button className="bg-white text-gray-700 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition text-sm sm:text-base">
        <i className="fas fa-video mr-2" /> Videosprechstunde
      </button>
      <button className="bg-white text-gray-700 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition text-sm sm:text-base">
        <i className="fas fa-house-user mr-2" /> Hausbesuch
      </button>
    </div>

    {/* Servicetyp-Leiste */}
    <div className="w-full bg-white shadow-md rounded-full px-6 py-4 flex flex-wrap sm:flex-nowrap items-center justify-center gap-3">
      <input
        type="text"
        placeholder="Notfall, Klauen schneiden"
        className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none text-sm min-w-[160px]"
      />
      <input
        type="text"
        placeholder="Hund, Katze"
        className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none text-sm min-w-[160px]"
      />
      <input
        type="text"
        placeholder="Berlin, Hamburg"
        className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none text-sm min-w-[160px]"
      />
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
      title: "Medizinische Services",
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
