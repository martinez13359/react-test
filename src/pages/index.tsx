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
      <section className="bg-[#f1c0c6] py-12 px-6 md:flex md:items-center md:justify-between">
  <div className="md:w-1/2 space-y-6">
    <h1 className="text-4xl text-white font-bold leading-snug">
      Finde Tierärzte, Tier-Salons und vieles mehr in deiner Nähe
    </h1>

    <div className="flex flex-wrap gap-3">
      <button className="bg-white text-gray-700 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition">
        <i className="fas fa-home mr-2" /> Vor-Ort-Termin
      </button>
      <button className="bg-white text-gray-700 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition">
        <i className="fas fa-video mr-2" /> Videosprechstunde
      </button>
      <button className="bg-white text-gray-700 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition">
        <i className="fas fa-house-user mr-2" /> Hausbesuch
      </button>
    </div>

    <div className="mt-6 flex flex-wrap gap-3 items-center bg-white shadow-md rounded-full px-4 py-3 w-fit">
      <input type="text" placeholder="Notfall, Klauen schneiden" className="px-3 py-2 w-48 border border-gray-300 rounded focus:outline-none" />
      <input type="text" placeholder="Hund, Katze" className="px-3 py-2 w-48 border border-gray-300 rounded focus:outline-none" />
      <input type="text" placeholder="Berlin, Hamburg" className="px-3 py-2 w-48 border border-gray-300 rounded focus:outline-none" />
      <button className="bg-blue-200 text-white px-4 py-2 rounded hover:bg-blue-300 transition">
        <i className="fas fa-search mr-1" /> Suchen
      </button>
    </div>
  </div>

  <div className="md:w-1/2 mt-8 md:mt-0 text-center">
    <img src="/hund-katze.jpg" alt="Hund und Katze" className="max-w-md w-full rounded-xl mx-auto" />
  </div>
</section>

        <section className="flex flex-col md:flex-row justify-between gap-6 p-6 bg-white">
          {[
            { title: "Medizinische Services", text: "Ihr Tier ist krank? Buchen Sie medizinische Services wie Notfallbehandlung, Impfung, Blutabnahme in einer Tierarzt-Praxis in Ihrer Nähe, per Hausbesuch oder Videotelefonat.", img: "/hund-krank.jpg" },
            { title: "Kosmetische Services", text: "Gönnen Sie sich und Ihrem Liebling einen Pflegeservice wie Fell-Pflege oder Klauen Schneiden in einem Salon in Ihrer Nähe oder per Hausbesuch.", img: "/hund-friseur.jpg" },
            { title: "Betreuung", text: "Suchen Sie regelmäßige oder einmalige Betreuung für Ihr Tier zum Beispiel für einen Urlaub oder den täglichen Mittagsspaziergang? Finden Sie vertrauensvolle und zuverlässige Anbieter.", img: "/birds-6910683_1280.jpg" }
          ].map((box, idx) => (
            <div key={idx} className="bg-blue-50 p-4 rounded-lg shadow w-full md:w-1/3 text-center">
              <img src={box.img} alt={box.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="font-semibold text-lg">{box.title}</h3>
              <p className="text-sm text-gray-600">{box.text}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
