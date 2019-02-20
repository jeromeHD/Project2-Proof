module.exports = function (sequelize, Sequelize) {
	var faveRecipes = sequelize.define("faveRecipes", {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		}

	});

	return faveRecipes;
};
