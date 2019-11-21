const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const noticias = require("./noticias.json");

const app = express();

app.use(cors());
app.use(bodyParser());

app.get("/api/v1/noticias/:id?", (req, res) => {
  let response = noticias;

  if (req.params.id) {
    response = noticias.filter(el => el.id == req.params.id);
  }

  setTimeout(() => {
    res.status(200).send({
      success: true,
      message: "esta todo bien",
      noticias: response
    });
  }, 1000);
});

app.get("/api/v1/noticias/full-descriptions", (req, res) => {
  const MAX_LENGTH = 20;

  const response = noticias.filter(el => el.description.length > MAX_LENGTH);

  res.status(200).send({
    success: true,
    message: "esta todo bien",
    noticias: response
  });
});

app.get("/api/v1/noticias/titles", (req, res) => {
  const response = noticias.map(el => el.title);

  res.status(200).send({ success: true, response });
});

app.post("/api/v1/noticias", (req, res) => {
  console.log(req.body);
  res.status(200).send({
    success: true,
    message: "POST"
  });
});

app.delete("/api/v1/noticias", (req, res) => {
  res.status(200).send({
    success: true,
    message: "delete"
  });
});

const port = 3000;

app.listen(port, () => console.log(`app started on port ${port}`));
