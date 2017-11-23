'use strict';

module.exports = {
  up: function up(queryInterface) {
    queryInterface.bulkInsert('event', [{
      id: 1,
      userId: 1,
      centerId: 1,
      event_title: 'Coming of Kings',
      starts: '23/23/2018',
      ends: '23/23/2018',
      image: 'www.image.com',
      description: 'conferences, ceremonies, weddings, formal parties, concerts'

    }], {});
  },

  down: function down(queryInterface) {
    queryInterface.bulkDelete('Person', null, {});
  }
};