const router = require("express").Router();
const authRoute = require("./routes/auth.routes");
const dataRoute = require("./routes/data.routes");
const userRoute = require("./routes/user.routes");

const health = require("./routes/health.routes");

const defaultRoutes = [
  { path: "/", route: health },
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
