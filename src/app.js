import express from "express";

const app = express();
const port = 3000;

const flags = [];
let nextId = 1;

app.use(express.json());

app.get("/flags", (req, res) => {
  res.json(flags);
});

app.get("/flags/:id", (req, res) => {
  const { id } = req.params;

  const flag = flags.find((flag) => flag.id === Number(id));

  if (!flag) {
    return res.status(404).json({ error: "Feature flag not found" });
  }

  res.status(200).json(flag);
});

app.post("/flags", (req, res) => {
  const { name, enabled, environment } = req.body;

  if (!name || enabled === undefined || !environment) {
    return res.status(400).json({
      error: "name, enabled, and environment are required",
    });
  }

  if (
    typeof name !== "string" ||
    typeof enabled !== "boolean" ||
    typeof environment !== "string"
  ) {
    res.status(400).json({ error: "Invalid field types" });
  }

  const flag = { id: nextId, name, enabled, environment };
  flags.push(flag);
  nextId++;

  res.status(201).json(flag);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
