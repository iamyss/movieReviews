const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const db = require("./db");
const movieService = require("./services/movieService");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  bodyParser.json({
    limit: "1024kb",
  })
);

app.get("/", function (req, res) {
  let query = req.query;
  if (query.username !== "yash" || query.password !== "iamyss") {
    res.status(400).json({
      error: "Invalid username or password!",
    });
  } else {
    res.status(200).json({
      message: "Welcome Yash!",
    });
  }
});

app.post("/", function (req, res) {
  try {
    let body = req.body;
    if (body.username !== "yash" || body.password !== "iamyss") {
      res.status(400).json({
        error: "Invalid username or password!",
      });
    } else {
      res.status(200).json({
        message: "Welcome Yash!",
      });
    }
  } catch (ex) {
    console.log(ex);
    res.status(400).json(ex);
  }
});

app.post("/movies", async (req, res) => {
  try {
    let body = req.body;
    let newMovie = await movieService.createMovie(
      body.title,
      body.date,
      body.rating,
      body.poster
    );
    res.status(200).json(newMovie);
  } catch (ex) {
    res.status(400).json(ex);
  }
});

app.get("/movies", async (req, res) => {
  try {
    let movies = await movieService.getAllMovies();
    res.status(200).json({
      movies: movies,
    });
  } catch (ex) {
    res.status(400).json(ex);
  }
});

app.post("/movies/:id", async (req, res) => {
  try {
    let movie = await movieService.updateMovie(req.params.id, req.body);
    res.status(200).json(movie);
  } catch (ex) {
    res.status(400).json(ex);
  }
});

app.post("/movies/delete/:id", async (req, res) => {
  try {
    let movie = await movieService.deleteMovie(req.params.id);
    res.status(200).json(movie);
  } catch (ex) {
    res.status(400).json(ex);
  }
});

app.listen(3000, "localhost", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("runing on port 3000");
  }
});
//http://localhost:3000/
