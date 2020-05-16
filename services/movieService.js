const Movies = require("../models/movies");

const createMovie = (name, date, rating, poster) => {
  let newMovie = new Movies({
    title: name,
    date: date,
    rating: rating,
    poster: poster,
  });
  newMovie
    .save()
    .then((movie) => {
      console.log("movie saved", movie);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  createMovie,
};
