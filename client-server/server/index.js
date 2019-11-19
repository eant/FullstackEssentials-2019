const express = require("express");
const noticias = require("./noticias.json");

var cors = require("cors");

var app = express();

app.use(cors());

app.get("/api/v1/noticias", (req, res) => {
  console.log(req.query);
  res.status(200).send({
    success: true,
    message: "esta todo bien",
    noticias: noticias
  });
});

const port = 3000;

app.listen(port, () => console.log(`app started on port ${port}`));
