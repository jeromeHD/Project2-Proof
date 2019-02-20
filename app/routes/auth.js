var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
  app.get("../views/signup", authController.signup);

  app.get("../views/signin", authController.signin);

  app.post(
    "../views/signup",
    passport.authenticate("local-signup", {
      successRedirect: "../views/layouts/main",

      failureRedirect: "../views/signup"
    })
  );

  app.get("../views/layouts/main", isLoggedIn, authController.main);

  app.get("/logout", authController.logout);

  app.post(
    "../views/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/../views/layouts/main",

      failureRedirect: "../views/signin"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("../views/signin");
  }
};
