module.exports.login_get = (req, res) => {
  res.status(200).send("login");
};

module.exports.login_post = (req, res) => {
  res.send("user login");
};
