const express = require("express");
const Boom = require("@hapi/boom");
const middlewares = require("../middlewares/app.middleware");
const api = require("../src/indexRouter");
const { isDev } = require("../config/keys");
const app = express();

middlewares(express, app);

app.use("/", api);

app.use("/health-check", (_, res) => {
  return res.sendStatus(200);
});

// ******************** Generate 404 Error ********************
app.use((_, res, next) => {
  return next(Boom.notFound("URL not Found!"));
});

// *********************** Error Response **********************
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, _) => {
  const { message = "Oops! Something went wrong", isBoom, output } = error;
  console.error(error);
  if (isBoom) {
    return res.status(output.statusCode).json({
      message,
      success: false,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Oops! Something went wrong",
  });
});

module.exports = app;
