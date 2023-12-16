const router = require("express").Router();
const { catchErrors } = require("../utils/handleErrors");
const validate = require("../../middlewares/validate");
const userValidation = require("../validations/user.validation");
const userController = require("../controllers/user.controller");
const { verifyUser } = require("../utils/token");

router.post("/signup", validate(userValidation.addUser), catchErrors(userController.addUser));
router.post("/candidate", verifyUser, catchErrors(userController.candidateData));

module.exports = router;
