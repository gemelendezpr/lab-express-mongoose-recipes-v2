var express = require("express");
var router = express.Router();

const Recipe = require("../models/Recipe");

router.post("/", (req, res, next) => {
  Recipe.create(req.body)
    .then((createdRecipe) => {
      console.log("Recipe created ->", createdRecipe);
      res.status(201).send(createdRecipe);
    })
    .catch((error) => {
      console.error("Error while creating a new recipe ->", error);
      res.status(500).send({ error: "Error while creating a new recipe"});
    });
});

router.get("/", (req, res, next) => {
  console.log("Hitting get route");
  Recipe.find()
    .then((foundRecipes) => {
      console.log(foundRecipes);
      res.status(201).send(foundRecipes);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.post("/update/:id", (req, res, next) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedRecipe) => {
      console.log(updatedRecipe);
      res.status(200).send(updatedRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.get("/delete/:id", (req, res, next) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then((updatedRecipe) => {
      console.log(updatedRecipe);
      res.status(200).send(updatedRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

module.exports = router;

// ROUTES
//  GET  / route - This is just an example route
// app.get('/', (req, res) => {
//     res.send("<h1>LAB | Express Mongoose Recipes</h1>");
// });

//  Iteration 3 - Create a Recipe route
//  POST  /recipes route

//  Iteration 4 - Get All Recipes
//  GET  /recipes route

//  Iteration 5 - Get a Single Recipe
//  GET  /recipes/:id route

//  Iteration 6 - Update a Single Recipe
//  PUT  /recipes/:id route

//  Iteration 7 - Delete a Single Recipe
//  DELETE  /recipes/:id route
