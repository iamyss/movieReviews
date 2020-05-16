const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const movie = new Schema({
  _id: ObjectId,
  title: {
    type: String,
    required: [true, "Movie Title is Mandatory"],
  },
  rating: Number,
  date: Date,
  poster: String,
});

const Movie = mongoose.model("Movie", movie);
module.exports = Movie;
