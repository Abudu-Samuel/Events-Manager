'use strict';

module.exports = {
  development: {
    username: 'postgres',
    password: null,
    database: 'events_manager',
    port: 5432,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    password: null,
    database: 'events_manager_test',
    port: 5432,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST_PROD,
    database: process.env.DATABASE_DATABASE_PROD,
    user: process.env.DATABASE_USER_PROD,
    password: process.env.DATABASE_PASSWORD_PROD
  }
};