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
    use_env_variable: 'DATABASE_URL'
  }
};
