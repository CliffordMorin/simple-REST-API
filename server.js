const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

//Middleware

//ROUTES

app.get("/", (req, res) => {
  res.send("We are home");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts");
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to DB");
});

//listen to server
app.listen(3000);
