"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, "..", "config", "config.json"))[env];
var db = {};

if (process.env.JAWSDB_URL) {
  const jawsDB = process.env.JAWSDB_URL.split(":");
  const host = jawsDB[2].split("@")[1];
  const port = jawsDB[3].split("/")[0];

  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: "mysql",
    protocol: "mysql",
    port,
    host,
    logging: true //false
  });
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return file.indexOf(".") !== 0 && file !== "index.js";
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
