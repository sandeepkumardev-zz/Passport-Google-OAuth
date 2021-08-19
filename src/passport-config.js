const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const initPassport = () => {
  const credentials = {
    clientID: process.env.GOOGLE_CONSUMER_KEY,
    clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
  };

  function authenticateUser(token, tokenSecret, profile, done) {
    return done(null, profile);
  }

  passport.use(new GoogleStrategy(credentials, authenticateUser));

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
};

module.exports = initPassport;
