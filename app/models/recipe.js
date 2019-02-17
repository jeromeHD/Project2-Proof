module.exports = function (sequelize, Sequelize) {
	var Recipe = sequelize.define("recipe", {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},

		recipe_name: {
			type: Sequelize.STRING,
			notEmpty: true
		},

		ingredients: {
			type: Sequelize.TEXT,
		},

		prep: {
			type: Sequelize.TEXT,
		},
	}, {
			timestamps: false
		});

	return Recipe;
};