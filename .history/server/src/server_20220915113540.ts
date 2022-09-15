import express from "express";
import { PrismaClient } from "@prisma/Client";
import { convertHoursStringToMinutes } from "./utils/convert-hours-string-to-minutes";

const PORT = 3333;

const app = express();
app.use(express.json());

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

app.post("/games/:id/ads", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const ad = await prisma.ad.create({
    data: {
      id,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      weekDays: body.weekDays.join(","),
      hourStart: convertHoursStringToMinutes(body.hourStart),
      hourEnd: convertHoursStringToMinutes(body.hourEnd),
      useVoidChannel: body.useVoidChannel,
    },
  });
  return res.status(201).send(ad);
});

app.get("/games/:id/ads", async (req, res) => {
  const gameId = req.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      yearsPlaying: true,
      weekDays: true,
      hourStart: true,
      hourEnd: true,
      useVoidChannel: true,
      gameId: true,
      game: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return res.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
      };
    })
  );
});

app.get("/ads/:id/discord", async (req, res) => {
  const adId = req.params.id;
  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });
  return res.json({ discord: ad.discord });
});

app.listen(PORT, () => console.log(`Running in http://localhost:${PORT}`));
