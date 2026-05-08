const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.send("Coolify works!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
