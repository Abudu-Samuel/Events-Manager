/*eslint-disable*/
const fs = require('fs');
const path = require('path');

const Sequelize = require('sequelize');

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// // Models/tables
// db.user = require('./user')(sequelize, Sequelize);
// db.event = require('./event')(sequelize, Sequelize);
// db.center = require('./center')(sequelize, Sequelize);

// // Associations
// db.user.hasMany(db.Event, { foreignKey: 'userId' });
// db.event.belongsTo(db.User, { foreignKey: 'userId' });
// db.event.belongsTo(db.Center, { foreignKey: 'centerId' });
// db.center.hasMany(db.Event, { foreignKey: 'centerId' });

module.exports = db;
