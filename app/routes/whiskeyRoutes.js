var control = require("../controllers/whiskeyController");

module.exports = (app, passport) => {

	app.get("/", (req, res) => {
		if (req.isAuthenticated()) res.redirect("profile");
		else res.render("signin");
	});

	app.get("/profile", isLoggedIn, (req, res) => {
		var id;

		if (req.query.id) id = req.query.id;
		else id = req.user.id;

		control.getUser(id, (user) => {
			res.render("profile", { User: user });
		});
	});

	app.get("/addbar", isLoggedIn, (req, res) => {
		res.render("newbar");
	});

	app.post("/addbar", isLoggedIn, (req, res) => {
		control.addBar(req.body.name, req.body.address, req.body.placeID, (data) => {
			res.redirect("bars");
		});
	});

	app.get("/recipes", isLoggedIn, (req, res) => {
		control.getAllRecipes(req.user.id, (data) => {
			res.render("recipes", { Recipe: data });
		});

	});

	app.get("/whiskeys", isLoggedIn, (req, res) => {
		control.getAllWhiskeys(req.user.id, (data) => {
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
		control.getAllBars(req.user.id, data => {
			res.render("bars", { bars: data });
		});

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

	app.put("/barfave/:bar", (req, res) => {
		control.toggleBarFavorite(req.user.id, req.params.bar);

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