import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Seed wird ausgeführt...");

  const services = ["Fellpflege", "Krallen schneiden", "Wellness", "Tagesbetreuung", "Urlaubsbetreuung"];
  const termintypen = ["Vor-Ort-Termin", "Hausbesuch"];

  const createdServices = await Promise.all(
    services.map(name =>
      prisma.servicekategorie.upsert({
        where: { name },
        update: {},
        create: { name },
      })
    )
  );

  const createdTermintypen = await Promise.all(
    termintypen.map(name =>
      prisma.termintyp.upsert({
        where: { name },
        update: {},
        create: { name },
      })
    )
  );

  const anbieterListe = [
    {
      name: "Lachmann Tierpflege",
      adresse: "Lindenweg 4",
      email: "krauseveit@bohnbach.de",
      telefon: "03046913810",
      beschreibung: "Sapiente quasi illum repellendus.",
      bewertung: 3.9,
      zertifikate: ["IHK Tierpflege", "Veterinärpflege Fortbildung"],
      bild: "/anbieter1.jpg",
    },
    {
      name: "Kabus Tierpflege",
      adresse: "Lindenweg 76",
      email: "suessebierveli@weitzel.org",
      telefon: "03066629388",
      beschreibung: "Ipsa ab nesciunt necessitatibus beatae at et reprehenderit.",
      bewertung: 3.5,
      zertifikate: ["IHK Tierpflege", "Veterinärpflege Fortbildung"],
      bild: "/anbieter2.jpg",
    },
    {
      name: "Knappe Gorlitz AG & Co. KGaA Tierpflege",
      adresse: "Wiesenstraße 65",
      email: "ismail87@roehrdanz.de",
      telefon: "03090801586",
      beschreibung: "Beatae doloribus soluta tempore. Ut vitae unde nihil.",
      bewertung: 3.5,
      zertifikate: ["IHK Tierpflege", "Tierärztekammer Zertifikat"],
      bild: "/anbieter3.jpg",
    },
    {
      name: "Eberth Tierpflege",
      adresse: "Wiesenstraße 58",
      email: "schaeferirmhild@hermann.de",
      telefon: "03089089901",
      beschreibung: "Vel deserunt quis iure perspiciatis nemo.",
      bewertung: 3.9,
      zertifikate: ["IHK Tierpflege", "Veterinärpflege Fortbildung"],
      bild: "/anbieter4.jpg",
    },
    {
      name: "Rudolph Reinhardt GmbH Tierpflege",
      adresse: "Am Park 44",
      email: "mariuszvan-der-dussen@tschentscher.de",
      telefon: "03047295260",
      beschreibung: "Odit repellat incidunt beatae fugit.",
      bewertung: 3.7,
      zertifikate: ["Tierärztekammer Zertifikat", "IHK Tierpflege"],
      bild: "/anbieter5.jpg",
    },
    // … weitere Anbieter folgen analog bis Anbieter 30
  ];

  for (let i = 0; i < anbieterListe.length; i++) {
    await prisma.anbieter.create({
      data: {
        ...anbieterListe[i],
        stadt: "Berlin",
        oeffnungszeiten: [
          { tag: "Montag", von: "08:00", bis: "18:00" },
          { tag: "Dienstag", von: "09:00", bis: "17:00" }
        ],
        services: {
          create: [
            {
              service: {
                connect: {
                  id: createdServices[i % createdServices.length].id
                }
              }
            }
          ]
        },
        termintypen: {
          create: [
            {
              termintyp: {
                connect: {
                  id: createdTermintypen[i % createdTermintypen.length].id
                }
              }
            }
          ]
        }
      }
    });
  }
}

main()
  .then(() => {
    console.log("Seed erfolgreich abgeschlossen ✅");
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect().then(() => process.exit(1));
  });
