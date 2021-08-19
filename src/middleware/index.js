const express = require("express");
const app = express();
const passport = require("passport");
const cookieSession = require("cookie-session");
const initPassport = require("../passport-config");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

initPassport();

app.use(
  cookieSession({
    name: "passport-oauth",
    keys: ["key1", "key2"],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(require("../routes"));

module.exports = app;
