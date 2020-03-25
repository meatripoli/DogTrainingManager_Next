'use strict';
const user = require ('./user');
const trainingForm = require ('./trainingForm');
const dogStatus = require ('./dogStatus');

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + "/../config/config.js")[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
const db = {
  user: user(sequelize,Sequelize),
  trainingForm: trainingForm(sequelize,Sequelize),
  dogStatus: dogStatus(sequelize,Sequelize),
};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
