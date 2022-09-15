import express from "express";
import { PrismaClient } from "@prisma/Client";

const PORT = 3333;

const app = express();
const prisma = new PrismaClient({
  log: ["query"],
});

app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });
  return res.json(games);
});

app.post("/ads", (req, res) => {
  return res.status(201).send([]);
});

app.get("/games/:id/ads", async (req, res) => {
  const gameId = req.params.id;
  const ads = await prisma.ad.findMany({
    where: {
      game: {
        gameId
      },
  }) 
  return res.json(ads);
});

app.get("/ads/:id/discord", (req, res) => {
  const adId = req.params.id;
  return res.json([]);
});

app.listen(PORT, () => console.log(`Running in http://localhost:${PORT}`));
