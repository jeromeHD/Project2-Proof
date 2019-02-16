var db = require("../models");

module.exports = (app => {

	app.get("/", (req, res) => {
		res.render("index");
	});

	app.get("/profile", (req, res) => {
		
		res.render("profile")
	});

	app.get("/create", (req,res) => {

	});
});