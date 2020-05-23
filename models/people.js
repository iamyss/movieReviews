const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const people = new Schema({
  name: {
    firstName: {
      type: String,
      required: [true, "First Name is Mandatory"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is Mandatory"],
    },
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Date Of Birth Is Required"],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    unique: [true, "Email ID Already Exists!"],
  },
  contactNumber: {
    type: String,
    unique: [true, "Mobile Number Already Exists!"],
  },
});

const People = mongoose.model("People", people);
module.exports = People;
