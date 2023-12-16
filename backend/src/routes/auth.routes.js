const router = require("express").Router();
const { catchErrors } = require("../utils/handleErrors");
const authValidation = require("../validations/auth.validation");
const validate = require("../../middlewares/validate");
const authController = require("../controllers/auth.controller");

router.post("/login", validate(authValidation.login), catchErrors(authController.login));

module.exports = router;
