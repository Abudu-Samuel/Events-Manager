const models = require('../models');

const ResetHelper = {
/**
  * @returns {init} The identifier for ...
  */
  init() {
    console.log('Resetting the Database....Please wait...');
    models.sequelize.sync({
      force: true
    })
      .then(() => {
        console.log('Database reset completed');
        process.exit(0);
      });
  }
};

module.exports = ResetHelper.init();
