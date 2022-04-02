const express = require("express");
const app = express();

app.get("/test", (_req, res) =>  {
  res.status(200).send("Hello world")
})

app.get("/test/new", (_req, res) =>  {
  res.status(200).send("Hello new world")
})
module.exports = app;