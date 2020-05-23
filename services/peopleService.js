const People = require("../models/people");

const createPeople = async (body) => {
  try {
    let people = await People.create(body);
    return people;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};

const updatePeople = async (id, body) => {
  try {
    let people = await People.findByIdAndUpdate({ _id: id }, body);
    return people;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};

const getAllPeople = async () => {
  try {
    return await People.find();
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};

const deletePeople = async (id) => {
  try {
    return await People.findByIdAndDelete({ _id: id });
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};

module.exports = {
  createPeople,
  updatePeople,
  getAllPeople,
  deletePeople,
};
