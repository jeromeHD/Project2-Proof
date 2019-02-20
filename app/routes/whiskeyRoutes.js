var control = require("../controllers/whiskeyController");
var authController = require("../controllers/authcontroller");

module.exports = (app, passport) => {

	app.get("/", (req, res) => {
		res.render("signin");
	});

	app.get("/profile", isLoggedIn, (req, res) => {
		res.render("profile")
	});

	app.get("/recipes", isLoggedIn, (req, res) => {
		control.getAllRecipes((data) => {
			res.render("recipes", { Recipe: data });
		});

	});

	app.get("/whiskeys", isLoggedIn, (req, res) => {
		control.getAllWhiskeys((data) => {
			console.log(data);
			res.render("whiskey", { Whiskey: data });
		});
	});

	app.get("/bars", isLoggedIn, (req, res) => {

	});

	app.get("/signup", function (req, res) {
		res.render("signup");
	});

	app.get("/signin", function (req, res) {
		res.render("signin");
	});

	app.post(
		"/signup",
		passport.authenticate("local-signup", {
			successRedirect: "profile",

			failureRedirect: "signup"
		})
	);

	app.get("/logout", function (req, res) {
		req.session.destroy(function (err) {
			res.redirect("/");
		});
	});

	app.post("/signin",
		passport.authenticate("local-signin", {
			successRedirect: "profile",

			failureRedirect: "signin"
		})
	);

	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) return next();

		res.redirect("/");
	};
};