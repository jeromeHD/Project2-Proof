module.exports = function(sequelize, Sequelize) {
  var bars = sequelize.define("bars", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    bar_name: {
      type: Sequelize.STRING,
      notEmpty: true
    }
  });

  return bars;
};
