'use strict';

module.exports = {
  up: function up(queryInterface) {
    queryInterface.bulkInsert('user', [{
      id: 1,
      firstname: 'David',
      lastname: 'Blind',
      username: 'Blinks',
      email: 'david@gmail.com',
      password: 'password',
      isAdmin: true
    }, {
      id: 2,
      firstname: 'Samuel',
      lastname: 'Break',
      username: 'Leumas',
      email: 'samuel@gmail.com',
      password: 'password',
      isAdmin: false
    }], {});
  },

  down: function down(queryInterface) {
    queryInterface.bulkDelete('Person', null, {});
  }
};