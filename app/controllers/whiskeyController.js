var db = require("../models");

module.exports = {
	getAllWhiskeys: (cb) => {
		db.whiskey.findAll().then((data) => {
			cb(data);
		});
	},

	getUser: (id, cb) => {
		db.user.findByPk(id).then(user => {
			createUser(user, cb);
		});
	},

	getAllRecipes: (cb) => {
		db.recipe.findAll().then(data => {
			cb(data);
		});
	},

	getWhiskeyFaves: (userId, cb) => {
		db.user.findByPk(userId).then(user => {
			user.getWhiskeys(cb);
		});
	},

	toggleWhiskeyFavorite: (userID, whiskeyID) => {
		db.whiskeyFaves.findOrCreate({ where: { userId: userID, whiskeyId: whiskeyID } })
			.spread((fave, created) => {
				if (!created) {
					fave.destroy();
				}
			});
	},

	toggleRecipeFavorite: (userID, recipeID) => {
		db.faveRecipes.findOrCreate({ where: { userId: userID, recipeId: recipeID } })
			.spread((fave, created) => {
				if (!created) {
					fave.destroy();
				}
			});
	},

	addRecipe: (name, ingredients, instructions, cb) => {
		db.recipe.create({ recipe_name: name, ingredients: ingredients, prep: instructions }).then(data => {
			cb(data);
		})
	},

	addBar: (name, address, placeID, cb) => {
		db.bar.create({ bar_name: name, bar_address: address, place_id: placeID }).then(data => {
			cb(data);
		})
	},

	getAllBars: (cb) => {
		db.bar.findAll().then(data => {
			cb(data);
		})
	}

}

function createUser(user, cb) {
	user.getWhiskeys({ include: [db.whiskey] }).then(whiskeys => {



		user.getRecipes({ include: [db.recipe] }).then(recipes => {

			cb({
				firstname: user.firstname,
				lastname: user.lastName,
				id: user.id,
				email: user.email,
				about: user.about,
				last_login: user.last_login,
				whiskeys: whiskeys,
				recipes: recipes
			});
		})
	});
}