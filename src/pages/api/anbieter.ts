import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const anbieter = await prisma.anbieter.findMany({
      include: {
        services: { include: { service: true } },
        termintypen: { include: { termintyp: true } }
      }
    });
    res.status(200).json(anbieter);
  } catch (error) {
    console.error("API Fehler:", error);
    res.status(500).json({ error: "Fehler beim Laden der Anbieter" });
  }
}
