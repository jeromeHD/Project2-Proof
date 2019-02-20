
module.exports = function (sequelize, Sequelize) {
	var Whiskey = sequelize.define(
		"whiskey",
		{
			id: {
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},

			whiskey_name: {
				type: Sequelize.STRING,
				notEmpty: true
			},

			rating: {
				type: Sequelize.INTEGER
			},

			country: {
				type: Sequelize.STRING
			},

			category: {
				type: Sequelize.STRING
			},

			price: {
				type: Sequelize.INTEGER
			},

			abv: {
				type: Sequelize.INTEGER
			},

			age: {
				type: Sequelize.INTEGER
			},

			brand: {
				type: Sequelize.STRING
			}
		},
		{
			timestamps: false
		}
	);

	Whiskey.associate = (models) => {
		Whiskey.hasMany(models.whiskeyFaves);
	}

	return Whiskey;
};