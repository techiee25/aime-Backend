const express = require("express");

require("dotenv").config();

const Mongoose = require("mongoose");

const Router = require("./routes/AimeRoute");

const app = express();

const cors = require("cors");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/aime", Router);

// DB connection

Mongoose.connect(process.env.MONGO_URI)

.then(() => {
  console.log("DB Connected successfully listening to" + process.env.PORT);
}).catch((error) => console.log("Connection failed", error.message));

app.listen(process.env.PORT, () => {
  console.log("server running");
});
