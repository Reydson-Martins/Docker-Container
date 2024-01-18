const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Olá Dev");
});

app.listen(3000);