#!/usr/bin/env node

var app = require("../network/server");
var http = require("http");
const { MONGO_URI, PORT, isDev } = require("../config/keys");
const mongoose = require("mongoose");
const pino = require("pino");
const logger = require("../middlewares/logger");
var server = http.createServer(app);

app.set("port", PORT);

(async function bootstrap() {
  await mongoose.connect(MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (isDev) {
    mongoose.set("debug", true);
  }
  console.log("\x1b[34m >> [MONGODB]:Connected \x1b[0m");

  server.listen(PORT);
})();

server.on("listening", () => {
  console.log("\x1b[34m >> [SERVER]:Connected on port :" + PORT + " \x1b[0m");
});

server.on("error", (error) => {
  // process.exit(1);
  throw error;
});

// mqttClient.mqttConnection();

const finalHandler = (event) => {
  return pino.final(logger, (error, finalLogger) => {
    finalLogger.error(error, event);
    throw new Error(error);
  });
};

process.on("beforeExit", finalHandler("beforeExit"));
process.on("exit", finalHandler("exit"));
process.on("unhandledRejection", finalHandler("unhandledRejection"));
process.on("SIGINT", finalHandler("SIGINT"));
process.on("SIGHUP", finalHandler("SIGHUP"));
process.on("SIGQUIT", finalHandler("SIGHUP"));
process.on("SIGTERM", finalHandler("SIGTERM"));
