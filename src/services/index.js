const home = (req, res) => {
  res.send("home");
};

const authSuccess = (req, res) => {
  res.send(`Welcome ${req.user.displayName}`);
};

const authFailed = (req, res) => {
  res.send("Auth failed!");
};

const signIn = (req, res) => {
  res.send("sign in");
};

const signUp = (req, res) => {
  res.send("sign up");
};

const signOut = (req, res) => {
  req.session = null;
  req.logOut();
  res.redirect("/");
};

module.exports = { home, signIn, signUp, signOut, authSuccess, authFailed };
