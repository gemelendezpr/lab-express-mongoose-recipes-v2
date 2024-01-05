const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

var recipesRouter = require("./routes/recipe");

const app = express();

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use("/recipes", recipesRouter);


// Iteration 1 - Connect to MongoDB
// DATABASE CONNECTION


// Start the server
app.listen(3000, () => console.log('My first app listening on port 3000!'));

const MONGODB_URI = "mongodb://127.0.0.1:27017/express-mongoose-recipes-dev";

mongoose
  .connect(MONGODB_URI)
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error("Error connecting to mongo", err));

//❗️DO NOT REMOVE THE BELOW CODE
module.exports = app;
