const express = require("express");

const app = express();

const noticias = [
  {
    title: "title 1",
    description: "description 1"
  }
];

app.get("/api/v1/noticias", function(req, res) {
  res.status(200).send({
    success: true,
    noticias: noticias
  });
});

const port = 1234;

app.listen(port, () => {
  console.log("app started on port ", port);
});
