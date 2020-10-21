const authControllers = {};

authControllers.login_get = (req, res) => {
  res.status(200).send("login");
};

authControllers.login_post = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send("user login");
};

module.exports = authControllers;
