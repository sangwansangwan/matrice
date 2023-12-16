const { catchErrors } = require('../utils/handleErrors');
const healthController = require('../controllers/health.controller');

const router = require('express').Router();

router.get('/', catchErrors(healthController.getHealth));

module.exports = router;
