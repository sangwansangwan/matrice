const Joi = require('joi');

const pagignation = {
  query: Joi.object().keys({
    pageSize: Joi.number(),
    pageNo: Joi.number().required(),
    sort: Joi.string(),
    search: Joi.string(),
    order: Joi.string(),
  }),
};

module.exports = { pagignation };
