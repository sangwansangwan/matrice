const userService = require("../services/user.service");

const addUser = async (req, res) => {
  const params = req.body;
  const data = await userService.addUser(params, req.user);
  res.status(200).json(data);
};

const candidateData = async (req, res) => {
  const params = req.body;
  const data = await userService.candidate(params, req.user);
  res.status(200).json(data);
};

module.exports = {
  addUser,
  candidateData,
};
