const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.get(
  "/",
  cors({
    origin: [
      "http://127.0.0.1",
      "http://localhost",
      "http://91.218.143.75",
      "http://www.dev-era-vr.ru",
      "http://dev-era-vr.ru",
    ],
  }),
  (req, res) => {
    res.send({ message: "Hello World!!!" });
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
