const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

//makes it so that the app can send and receive json
app.use(bodyParser.json());

//Import ROUTES
const postsRoute = require("./routes/posts");
//middleware
app.use("/posts", postsRoute);

//ROUTES home
app.get("/", (req, res) => {
  res.send("We are home");
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to DB");
});

//listen to server
app.listen(3000);
