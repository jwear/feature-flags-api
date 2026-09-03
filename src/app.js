import express from "express";

const app = express();
const port = 3000;

const flags = [];

app.use(express.json());

app.get("/flags", (req, res) => {
  res.json(flags);
});

app.post("/flags", (req, res) => {
  flags.push(req.body);
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
