import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from 'next/script';
import { useEffect, useRef } from "react";
/// <reference types="@types/google.maps" />

declare global {
    interface Window {
      google: typeof google;
    }
  }

export default function Ergebnisse() {
    const mapRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (typeof window !== "undefined" && window.google && mapRef.current) {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 52.52, lng: 13.405 }, // Berlin
      zoom: 11,
    });

    // Beispiel-Marker
    new window.google.maps.Marker({
      position: { lat: 52.52, lng: 13.405 },
      map,
      title: "Beispielanbieter",
    });
  }
}, []);
    return (
    <>
      <Head>
        <title>Suchergebnisse - Haustierportal</title>
        <meta name="description" content="Suchergebnisse für Hundeservices in Berlin und Umgebung" />
      </Head>
      <Script
  src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
  strategy="beforeInteractive"
/>
      <Header />
      <main className="bg-white min-h-screen text-gray-800">
      <section className="bg-rose-100 px-4 py-1">
            {/* Suchleiste */}
{/* Kompakte Suchleiste */}
<div className="bg-white shadow-md rounded-full px-4 py-2 mb-2 mt-1 flex flex-wrap sm:flex-nowrap items-center justify-center gap-2">
  <input
    type="text"
    placeholder="Fellpflege, Betreuung"
    className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none text-sm min-w-[140px]"
  />
  <input
    type="text"
    placeholder="Berlin, Charlottenburg"
    className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none text-sm min-w-[140px]"
  />
  <button className="bg-blue-200 text-white px-3 py-1.5 rounded hover:bg-blue-300 transition text-sm">
    <i className="fas fa-search mr-1" /> Suchen
  </button>
</div>
{/* Aktive Filter + Sortierung */}
<div className="flex flex-wrap items-center gap-3 mt-1 mb-2">
  {/* Filter-Tag */}
  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full flex items-center">
    Hausbesuch
    <button className="ml-2 text-blue-700 hover:text-blue-900">✕</button>
  </span>

  {/* Sortierung als Button */}
  <button className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition">
    Filter/Sortierung
  </button>
</div>

        <div className="flex flex-col lg:flex-row gap-2">
  {/* Linke Seite: Ergebnisliste */}
  <section className="lg:w-7/12 space-y-6">
    {[1, 2, 3].map((id) => (
      <div
        key={id}
        className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row gap-6"
      >
        <img
          src={`/anbieter${id}.jpg`}
          alt="Anbieter Bild"
          className="w-full md:w-40 h-40 object-cover rounded"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">Hundesalon Beispiel {id}</h3>
          <p className="text-sm text-gray-600 mb-2">
            Spezialisiert auf Fellpflege und liebevolle Betreuung.
            Öffnungszeiten: Mo-Fr 09:00–18:00 Uhr
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Adresse: Musterstraße 123, 10557 Berlin
          </p>
          <div className="flex gap-2 mt-2">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Fellpflege</span>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Hausbesuch</span>
          </div>
        </div>
      </div>
    ))}
  </section>

  {/* Rechte Seite: Karte */}
  <section className="lg:w-5/12 h-[600px]">
  <div className="w-full h-[500px] rounded-lg shadow" ref={mapRef}></div>
  </section>
</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
