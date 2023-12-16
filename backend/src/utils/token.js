const { TOKEN_KEY } = require("../../config/keys");
const Boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
  const header = req.headers.authorization;
  try {
    if (!header) {
      throw Boom.forbidden();
    }

    const [scheme, token] = header.split(" ");
    if (scheme !== "Bearer") {
      throw Boom.forbidden();
    }
    const tokenPayload = await jwt.verify(token, TOKEN_KEY, {
      algorithms: ["HS256"],
    });

    if (tokenPayload) {
      req.user = tokenPayload;
      return next();
    }
  } catch (err) {
    next(Boom.unauthorized("Unauthorized Access! Please login."));
  }
};

const generateToken = (data, expiryTime) => {
  return jwt.sign(data, TOKEN_KEY, {
    expiresIn: expiryTime,
  });
};

module.exports = {
  verifyUser,
  generateToken,
};
