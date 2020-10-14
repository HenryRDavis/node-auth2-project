const express = require("express");
const helmet = require("helmet");
const authRouter = require("../auth/auth-router.js");
// const usersRouter = require("../users/users-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
