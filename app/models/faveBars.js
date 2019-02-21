module.exports = function (sequelize, Sequelize) {
    var faveBars = sequelize.define("faveBars", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        }

    });

    faveBars.associate = (models) => {
        faveBars.belongsTo(models.bar);
    }


    return faveBars;
};
