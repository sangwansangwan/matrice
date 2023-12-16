const Boom = require("@hapi/boom");
const User = require("../models/userData.model");
const { generateHash } = require("../utils/Pasword");

const addUser = async (params, parentUser) => {
  const existingUserByUsername = await User.findOne({ userName: params.userName });
  if (existingUserByUsername) {
    throw Boom.badRequest("Username already exists");
  }

  const existingUserByEmail = await User.findOne({ email: params.email });
  if (existingUserByEmail) {
    throw Boom.badRequest("Email already exists");
  }

  const newUser = { ...params };

  newUser.password = await generateHash(params.password);

  await User.create(newUser);
  return {
    success: true,
  };
};

const candidate = async (params, parentUser) => {
  const checkingUser = await User.findOne({ userName: params.userName });
  if (!checkingUser) {
    throw Boom.badRequest("User does not exists");
  }

  await User.updateOne({ userName: params.userName });
};

module.exports = {
  addUser,
  candidate,
};
