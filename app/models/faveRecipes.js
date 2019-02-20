module.exports = function (sequelize, Sequelize) {
	var faveRecipes = sequelize.define("faveRecipes", {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		}

	});

	faveRecipes.associate = (models) => {
		faveRecipes.belongsTo(models.recipe);
	}


	return faveRecipes;
};
