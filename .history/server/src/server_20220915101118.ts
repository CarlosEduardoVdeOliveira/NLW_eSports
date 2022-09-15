import express from "express";
import { PrismaClient } from "@prisma/Client";

const PORT = 3333;

const app = express();
const prisma = new PrismaClient();

app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany();
  return res.json(games);
});

app.post("/ads", (req, res) => {
  return res.status(201).send([]);
});

app.get("/games/:id/ads", (req, res) => {
  const gameId = req.params.id;
  return res.json([]);
});

app.get("/ads/:id/discord", (req, res) => {
  const adId = req.params.id;
  return res.json([]);
});

app.listen(PORT, () => console.log(`Running in http://localhost:${PORT}`));
