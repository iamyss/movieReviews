const Movies = require("../models/movies");

const createMovie = (name, date, rating, poster) => {
  let newMovie = new Movies({
    title: name,
    date: date,
    rating: rating,
    poster: poster,
  });
  return new Promise((resolve, rejects) => {
    newMovie
      .save()
      .then((movie) => {
        console.log("movie saved", movie);
        resolve(movie);
      })
      .catch((err) => {
        console.log(err);
        rejects(err);
      });
  });
};

module.exports = {
  createMovie,
};
