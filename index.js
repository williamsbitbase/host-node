const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());
app.use(cors());

// Serve static files correctly from 'public/dist'
app.use(express.static(path.join(__dirname, "public", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
