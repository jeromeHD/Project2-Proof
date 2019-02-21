module.exports = function (sequelize, Sequelize) {
  var Bar = sequelize.define("bar", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    bar_name: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    bar_address: {
      type: Sequelize.TEXT
    },

    place_id: {
      type: Sequelize.STRING,
      notEmpty: true
    }
  });

  return Bar;
};
