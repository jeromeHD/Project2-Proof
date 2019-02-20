module.exports = function (sequelize, Sequelize) {
	var whiskeyFaves = sequelize.define("whiskeyFaves", {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		}
	});

	whiskeyFaves.associate = (models) => {
		whiskeyFaves.belongsTo(models.whiskey);
	}

	return whiskeyFaves;
};
