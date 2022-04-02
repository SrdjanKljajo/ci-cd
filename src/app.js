const express = require("express");
const app = express();

app.get("/test", (_req, res) =>  {
  res.status(200).send("Hello world")
})

app.get("/test/new", (_req, res) =>  {
  res.status(200).send("Hello new world")
})

app.get("/test/srki", (_req, res) =>  {
  res.status(200).send("Hello srki world")
})
module.exports = app;