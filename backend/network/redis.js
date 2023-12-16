const ioredis = require('ioredis');
const { REDIS_URI } = require('../config/keys');

const redis = new ioredis(REDIS_URI);

module.exports = { redis };