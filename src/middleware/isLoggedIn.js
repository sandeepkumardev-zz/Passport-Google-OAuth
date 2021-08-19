module.exports = (req, res, next) => {
  if (!req.user) {
    res.sendStatus(401);
  }
  next();
};
