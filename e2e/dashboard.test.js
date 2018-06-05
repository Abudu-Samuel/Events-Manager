const path = require('path');

const APP_BASE_PATH = 'http://localhost:8000';

module.exports = {
  'Sign in a user to their dashboard': (browser) => {
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
      .setValue('.username', 'leumas')
      .pause(1000)
      .click('.btn-mycolor')
      .pause(2000)
      .click('.swal-button')
      .pause(2000);
  },
  'Signed in users can view a single event': (browser) => {
    browser
      .assert.containsText('h3', 'Welcome to Events Manager')
      .assert.elementPresent('hr')
      .click('#viewEvent')
      .assert.elementPresent('button')
      .pause(3000)
      .click('.navbar-brand')
      .pause(3000);
  },
  'Signed in users can navigate event pages': (browser) => {
    browser
      .assert.containsText('h3', 'Welcome to Events Manager')
      .assert.elementPresent('hr')
      .click('.next')
      .pause(3000)
      .click('.previous')
      .pause(3000);
  },
  'Signed in user can view a single center': (browser) => {
    browser
      .assert.containsText('h3', 'Welcome to Events Manager')
      .assert.elementPresent('hr')
      .click('#viewCenter')
      .pause(3000)
      .assert.elementPresent('button')
      .pause(1000);
  },
  'Signed in user can add event': (browser) => {
    browser
      .assert.elementPresent('hr')
      .click('.add')
      .pause(1000)
      .setValue('.title', 'new event')
      .pause(1000)
      .setValue('.date', '04/07/2018')
      .pause(1000)
      .setValue('.type', 'testing')
      .pause(1000)
      .setValue('.image', path.resolve(`${__dirname}/test.png`))
      .pause(3000)
      .setValue('.description', 'Awesome')
      .pause(1000)
      .click('.edit-event')
      .pause(1000)
      .click('.swal-button')
      .pause(2000)
      .click('.nav-link');
  },
  'Signed in users can view events they created': (browser) => {
    browser
      .assert.elementPresent('hr')
      .assert.elementPresent('a[aria-expanded="false"]')
      .click('a[aria-expanded="false"]')
      .pause(1000)
      .click('.manage-event')
      .assert.containsText('h2', 'My Events')
      .assert.elementPresent('button')
      .assert.visible('.mt-3')
      .assert.visible('.font-weight-bold')
      .assert.visible('ul')
      .pause(2000);
  },
  'Signed in users can edit events they created': (browser) => {
    browser
      .assert.containsText('h2', 'My Events')
      .assert.elementPresent('button')
      .assert.visible('.mt-3')
      .assert.visible('.font-weight-bold')
      .assert.visible('ul')
      .click('.edit-event')
      .assert.elementPresent('input')
      .clearValue('.title')
      .pause(3000)
      .setValue('.title', 'Updated Event')
      .pause(2000)
      .click('.edit-event')
      .pause(2000)
      .click('.swal-button')
      .pause(2000);
  },
  'Signed in users can delete events they created': (browser) => {
    browser
      .assert.containsText('h2', 'My Events')
      .assert.elementPresent('button')
      .assert.visible('.mt-3')
      .assert.visible('.font-weight-bold')
      .assert.visible('ul')
      .click('.delete-event')
      .pause(1000)
      .click('.swal-button--danger')
      .pause(1000)
      .click('.swal-button')
      .end();
  },
};
