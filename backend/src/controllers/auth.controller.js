const authService = require("../services/auth.service");

const login = async (req, res) => {
  const { userId, password, rememberMe } = req.body;
  const user = await authService.loginUser(userId, password, rememberMe);
  res.status(200).json(user);
};

module.exports = {
  login,
};
