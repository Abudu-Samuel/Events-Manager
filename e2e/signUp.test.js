const APP_BASE_PATH = 'http://localhost:8000';

module.exports = {
  'User signup': (browser) => {
    browser
      .url(APP_BASE_PATH)
      .waitForElementVisible('body', 10000)
      .assert.urlEquals(`${APP_BASE_PATH}/`)
      .assert.visible('body')
      .click('.waves-light-signup')
      .waitForElementVisible('.hm-black-strong', 10000)
      .assert.visible('.hm-black-strong')
      .setValue('.firstname', 'test')
      .pause(1000)
      .setValue('.lastname', 'tester')
      .pause(1000)
      .setValue('.email', 'tester@gmail.com')
      .pause(1000)
      .setValue('.password', 'password')
      .pause(1000)
      .setValue('.username', 'testing')
      .pause(1000)
      .click('.btn-mycolor')
      .pause(3000)
      .end();
  }
};
