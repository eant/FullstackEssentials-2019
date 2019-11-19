const express = require("express");
const noticias = require("./noticias.json");

const app = express();

app.get("/", (req, res) => {
  console.log(req.query);
  res.status(200).send({
    success: true,
    message: "esta todo bien",
    noticias: noticias
  });
});

const port = 3000;

app.listen(port, () => console.log(`app started on port ${port}`));
