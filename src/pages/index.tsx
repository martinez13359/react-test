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
        <section className="flex flex-col md:flex-row justify-between p-6">
          <div className="md:w-2/3 space-y-6">
            <h1 className="text-4xl text-white font-bold">
              Finde Tierärzte, Tier-Salons und vieles mehr in deiner Nähe
            </h1>
            <div className="flex gap-4">
              <button className="option-button"><i className="fas fa-home" /> Vor-Ort-Termin</button>
              <button className="option-button"><i className="fas fa-video" /> Videosprechstunde</button>
              <button className="option-button"><i className="fas fa-house-user" /> Hausbesuch</button>
            </div>
            <div className="search-box flex flex-wrap gap-4 bg-white p-4 rounded-full shadow-md relative">
              <input type="text" className="border rounded px-4 py-2 w-48" placeholder="Notfall, Klauen schneiden" />
              <input type="text" className="border rounded px-4 py-2 w-48" placeholder="Hund, Katze" />
              <input type="text" className="border rounded px-4 py-2 w-48" placeholder="Berlin, Hamburg" />
              <button className="bg-blue-200 text-white px-4 py-2 rounded">Suchen</button>
            </div>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <img src="/hund-katze.jpg" alt="Hund und Katze" className="w-full rounded-lg" />
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
