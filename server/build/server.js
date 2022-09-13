import express from "express";
const PORT = 3333;
const app = express();
app.get("/ads", (req, res) => {
    return res.json([
        { id: 1, name: "Carlos" },
        { id: 2, name: "Lucas" },
        { id: 3, name: "Maria" }
    ]);
});
app.listen(PORT, () => (console.log(`Running in http://localhost:${PORT}`)));
