const express = require("express");
const {
  home,
  signIn,
  signUp,
  signOut,
  authFailed,
  authSuccess,
} = require("../services");
const router = express.Router();
const passport = require("passport");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", home);

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/success",
    failureRedirect: "/failed",
  })
);

router.get("/success", isLoggedIn, authSuccess);
router.get("/failed", authFailed);
router.post("/signin", signIn);
router.post("/signup", signUp);
router.get("/signout", signOut);

module.exports = router;
