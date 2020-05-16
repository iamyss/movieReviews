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

const updateMovie = async (id, body) => {
  try {
    let { title, date, rating, poster } = body;
    let movie = await Movies.findById(id);
    movie.title = title;
    movie.date = date;
    movie.rating = rating;
    movie.poster = poster;
    movie = await movie.save();
    return movie;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};

const deleteMovie = async (id) => {
  try {
    let movie = await Movies.findByIdAndDelete(id);
    return movie;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
};
