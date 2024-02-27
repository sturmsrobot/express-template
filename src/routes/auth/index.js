const { Router } = require("express");
const { StatusCodes } = require("http-status-codes");

const AuthRouter = Router();

AuthRouter.get("/login", (req, res) => {
  console.log(res);
  res.status(StatusCodes.OK).send("User Login");
});

AuthRouter.post("/signup", (req, res) => {
  res.status(StatusCodes.OK).send("User Sign Up");
});

AuthRouter.delete("/logout", (req, res) => {
  res.status(StatusCodes.OK).send("Logout");
});

module.exports = { AuthRouter };
