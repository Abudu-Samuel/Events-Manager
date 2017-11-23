'use strict';

var models = require('../models');

var ResetHelper = {
  /**
    * @returns {init} The identifier for ...
    */
  init: function init() {
    console.log('Resetting the Database....Please wait...');
    models.sequelize.sync({
      force: true
    }).then(function () {
      console.log('Database reset completed');
      process.exit(0);
    });
  }
};

module.exports = ResetHelper.init();