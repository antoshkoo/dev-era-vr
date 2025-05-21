const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.get(
  "/",
  cors({
    origin: ["http://localhost", "https://dev-era-vr.ru"],
  }),
  (req, res) => {
    res.send({ message: "Hello World!!!" });
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
