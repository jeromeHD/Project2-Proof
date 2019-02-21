var control = require("../controllers/whiskeyController");

module.exports = (app, passport) => {

	app.get("/", (req, res) => {
		res.render("signin");
	});

	app.get("/profile", isLoggedIn, (req, res) => {
		var id;

		if (req.query.id) id = req.query.id;
		else id = req.user.id;

		control.getUser(id, (user) => {
			console.log("user:" + JSON.stringify(user));
			res.render("profile", { User: user });
		});
	});

	app.get("/addbar", isLoggedIn, (req, res) => {
		res.render("newbar");
	})

	app.get("/recipes", isLoggedIn, (req, res) => {
		control.getAllRecipes((data) => {
			res.render("recipes", { Recipe: data });
		});

	});

	app.get("/whiskeys", isLoggedIn, (req, res) => {
		control.getAllWhiskeys((data) => {
			res.render("whiskey", { Whiskey: data });
		});
	});

	app.get("/newrecipe", isLoggedIn, (req, res) => {
		res.render("newrecipe");
	});

	app.post("/newrecipe", (req, res) => {
		control.addRecipe(req.body.name, req.body.ingredients, req.body.prep, (data) => {

			res.redirect("recipes");
		})
	});

	app.get("/bars", isLoggedIn, (req, res) => {
		res.render("bars");
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

	app.put("/whiskeyfave/:whiskey", (req, res) => {
		control.toggleWhiskeyFavorite(req.user.id, req.params.whiskey);

		res.status(200);
		res.end();
	});

	app.put("/recipefave/:recipe", (req, res) => {
		control.toggleRecipeFavorite(req.user.id, req.params.recipe);

		res.status(200);
		res.end();
	});

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