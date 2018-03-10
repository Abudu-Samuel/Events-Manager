require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'events_manager',
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'events_manager_test',
    dialect: 'postgres'
  },
  production: {
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL'
  }
};

