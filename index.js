const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  express.static(path.join(__dirname,"public", "dist"), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on port : ${PORT}`);
});
