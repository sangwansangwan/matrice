const { compareHash } = require("../utils/Pasword");
const Boom = require("@hapi/boom");
const { TOKEN_DURATION } = require("../../config/keys");
const User = require("../models/userData.model");
const { generateToken } = require("../utils/token");

const loginUser = async (userId, password, rememberMe) => {
  const user = await User.findOne({
    $or: [{ email: userId }, { userName: userId }],
  }).lean();

  if (!user) {
    throw Boom.unauthorized("Incorrect username or password");
  }

  const matchPassword = await compareHash(password, user.password);

  if (!matchPassword) {
    throw Boom.unauthorized("Incorrect username or password");
  }

  const payload = {
    sub: user._id,
  };

  const REMEBER_ME = "40d";

  const token = generateToken(payload, (rememberMe && REMEBER_ME) || TOKEN_DURATION);

  return {
    success: true,
    data: {
      token,
      userId,
    },
  };
};

module.exports = {
  loginUser,
};
