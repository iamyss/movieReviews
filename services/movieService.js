const Movies = require("../models/movies");

const createMovie = async (name, date, rating, poster) => {
  try {
    let newMovie = new Movies({
      title: name,
      date: date,
      rating: rating,
      poster: poster,
    });
    newMovie = await newMovie.save();
    return newMovie;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};

const getAllMovies = async () => {
  try {
    let movies = await Movies.find();
    return movies;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};

module.exports = {
  createMovie,
  getAllMovies,
};
