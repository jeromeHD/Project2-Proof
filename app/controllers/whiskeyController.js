var db = require("../models");

module.exports = {
	getAllWhiskeys: (cb) => {
		db.whiskey.findAll().then((data) => {
			cb(data);
		});
	},

	getAllUsers: (cb) => {
		db.user.findAll().then((data) => {
			var users = [];

			data.forEach(user => {
				users.push(createUser(user));
			});

			cb(users);
		})
	},

	getUser: (id, cb) => {
		db.user.find({
			where: {
				id: id
			}
		}).then(data => {
			cb(createUser(db));
		})
	},

	getAllRecipes: (cb) => {
		db.recipe.findAll().then(data => {
			cb(data);
		});
	}
}

function createUser(data) {
	return {
		firstname: data.firstname,
		lastname: data.lastName,
		username: data.username,
		id: data.id,
		email: data.email,
		about: data.about,
		last_login: data.last_login
	}
}