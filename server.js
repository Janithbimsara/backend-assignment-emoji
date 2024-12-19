const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const storyRoutes = require("./routes/emojiStoryRoutes");
require("dotenv").config();

const app = express();
connectDB();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome from APP" });
});

app.use("/api/v1/", storyRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
