const Joi = require("joi");
const { password } = require("./custom.validation");

const addUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    userName: Joi.string().required(),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userName: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      organisation: Joi.string(),
      name: Joi.string(),
      permissions: Joi.array().items(Joi.string()),
      batteries: Joi.array().items(Joi.string()),
      isActive: Joi.boolean(),
      subUsers: Joi.number(),
    })
    .min(1),
};

module.exports = {
  addUser,
  updateUser,
};
