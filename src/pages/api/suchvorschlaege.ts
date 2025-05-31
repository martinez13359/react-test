import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const services = await prisma.servicekategorie.findMany();
    const orte = await prisma.anbieter.findMany({
      select: { stadt: true },
      distinct: ["stadt"]
    });

    res.status(200).json({
      services: services.map(s => s.name),
      orte: orte.map(o => o.stadt)
    });
  } catch (error) {
    res.status(500).json({ error: "Fehler beim Laden der Suchvorschläge" });
  }
}
