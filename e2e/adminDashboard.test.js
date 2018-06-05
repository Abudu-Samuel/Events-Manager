const path = require('path');

const APP_BASE_PATH = 'http://localhost:8000';

module.exports = {
  'Sign in admin to their dashboard': (browser) => {
    browser
      .url(`${APP_BASE_PATH}/signin`)
      .waitForElementVisible('body', 10000)
      .assert.urlEquals(`${APP_BASE_PATH}/signin`)
      .assert.visible('body')
      .click('.waves-light-signin')
      .waitForElementVisible('.hm-black-strong', 10000)
      .assert.visible('.hm-black-strong')
      .setValue('.password', 'password')
      .pause(1000)
      .setValue('.username', '')
      .pause(1000)
      .click('.btn-mycolor')
      .pause(3000)
      .clearValue('.password')
      .pause(1000)
      .setValue('.password', 'password')
      .pause(1000)
      .setValue('.username', 'admin')
      .pause(1000)
      .click('.btn-mycolor')
      .pause(2000)
      .click('.swal-button')
      .pause(2000);
  },
  'Signed in admin can add center': (browser) => {
    browser
      .assert.elementPresent('hr')
      .assert.containsText('.min', 'Admin')
      .assert.elementPresent('button')
      .click('.ad')
      .pause(1000)
      .setValue('.name', 'new center')
      .pause(1000)
      .setValue('.state', 'Lagos')
      .pause(1000)
      .click('.available')
      .pause(1000)
      .setValue('.location', 'ikeja')
      .pause(1000)
      .setValue('.description', 'awesome')
      .pause(1000)
      .setValue('.capacity', 3500)
      .pause(1000)
      .setValue('.price', 400000)
      .pause(1000)
      .setValue('.image', path.resolve(`${__dirname}/test.png`))
      .pause(10000)
      .click('.added')
      .pause(1000)
      .click('.swal-button')
      .pause(1000);
  },
  'Signed in admin can edit centers they created': (browser) => {
    browser
      .assert.elementPresent('hr')
      .assert.containsText('.min', 'Admin')
      .assert.elementPresent('button')
      .pause(3000)
      .click('.ec')
      .pause(2000)
      .clearValue('.name')
      .pause(1000)
      .setValue('.name', 'Updated center')
      .pause(1000)
      .click('.notAvailable')
      .pause(1000)
      .clearValue('.state')
      .pause(1000)
      .click('.added')
      .pause(1000)
      .click('.swal-button')
      .pause(2000)
      .end();
  }
};
