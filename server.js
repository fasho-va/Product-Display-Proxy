const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;

const app = express();

app.use(bodyParser());
app.use(cors());
app.use(express.static("./public"));

app.listen(port, () => {
  console.log("listening on port", port);
});
