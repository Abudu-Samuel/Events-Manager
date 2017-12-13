'use strict';

module.exports = {
  up: function up(queryInterface) {
    return queryInterface.bulkInsert('user', [{
      id: 1,
      firstname: 'David',
      lastname: 'Blind',
      username: 'admin',
      email: 'david@gmail.com',
      password: 'password',
      isAdmin: true
    }, {}], {});
  },

  down: function down(queryInterface) {
    return queryInterface.bulkDelete('Person', null, {});
  }
};