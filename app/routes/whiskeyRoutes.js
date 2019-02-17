var control = require("../controllers/whiskeyController");

module.exports = (app => {

	app.get("/", (req, res) => {
		res.render("signin");
	});

	app.get("/profile", (req, res) => {
		res.render("profile")
	});

	app.get("/recipes", (req, res) => {
		control.getAllRecipes((data) => {
			res.render("recipes", { Recipe: data });
		});

	});

	app.get("/whiskeys", (req, res) => {
		control.getAllWhiskeys((data) => {
			console.log(data);
			res.render("whiskey", { Whiskey: data });
		});
	})
});