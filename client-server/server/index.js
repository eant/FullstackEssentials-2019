const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const loki = require("lokijs");

const db = new loki("./test.json");

let noticias = db.addCollection("noticias");

db.loadDatabase({}, () => {
  noticias = db.getCollection("noticias");
});

const app = express();

app.use(cors());
app.use(bodyParser());

app.get("/api/v1/noticias/:id?", (req, res) => {
  let response = noticias.data;

  if (req.params.id) {
    response = noticias
      .chain()
      .find({ $loki: Number(req.params.id) })
      .data();
  }

  res.status(200).send({
    success: true,
    message: "esta todo bien",
    noticias: response
  });
});

app.post("/api/v1/noticias", (req, res) => {
  const insert = noticias.insert(req.body);
  db.saveDatabase();

  res.status(200).send({
    success: true,
    message: "POST",
    insert
  });
});

app.delete("/api/v1/noticias/:id", (req, res) => {
  const result = noticias
    .chain()
    .find({ $loki: Number(req.params.id) })
    .remove();
  db.saveDatabase();

  res.status(200).send({
    success: true,
    message: "delete",
    result
  });
});

app.get("/api/v1/noticias/full-descriptions", (req, res) => {
  const MAX_LENGTH = 20;

  const response = noticias.data.filter(
    el => el.description.length > MAX_LENGTH
  );

  res.status(200).send({
    success: true,
    message: "esta todo bien",
    noticias: response
  });
});

app.get("/api/v1/noticias/titles", (req, res) => {
  const response = noticias.data.map(el => el.title);

  res.status(200).send({ success: true, response });
});

const port = 3000;

app.listen(port, () => console.log(`app started on port ${port}`));
