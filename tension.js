console.log("Tension Bot is starting...");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Tension Bot is online! 🤖");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Tension Bot is running on port ${PORT}`);
});
