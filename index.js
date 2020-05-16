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

app.post("/movies", function (req, res) {
  let body = req.body;
  let prom = movieService.createMovie(
    body.title,
    body.date,
    body.rating,
    body.poster
  );
  console.log(prom);
  prom
    .then((movie) => {
      res.status(200).json(movie);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.listen(3000, "localhost", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("runing on port 3000");
  }
});
//http://localhost:3000/
