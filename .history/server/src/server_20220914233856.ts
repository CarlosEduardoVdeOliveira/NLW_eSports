import express from "express";
const PORT = 3333;
const app = express();

app.get("/games", (req, res) => {
  return res.json([]);
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
