module.exports = function (sequelize, Sequelize) {
	var whiskeyFaves = sequelize.define("whiskeyFaves", {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		}
	});

	return whiskeyFaves;
};
