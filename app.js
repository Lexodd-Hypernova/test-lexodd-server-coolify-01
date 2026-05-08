const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.send("Coolify works!");
});

app.listen(3000);
