'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { /* eslint-disable-line */
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn('centers', 'price', {
      type: Sequelize.FLOAT,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Price Field Required!'
        },
        isFloat: {
          args: true,
          msg: 'Price Should contain only Numbers'
        }
      }
    })
  },

  down: (queryInterface, Sequelize) => { /* eslint-disable-line */
    /* 
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
