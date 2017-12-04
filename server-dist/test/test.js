'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _chai = require('chai');

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminToken = void 0;
var userToken = void 0;

describe('Events Manager', function () {
  it('should return Welcome to Events Manager API', function (done) {
    (0, _supertest2.default)(_app2.default).get('/').expect(200).then(function (res) {
      _chai.assert.deepEqual(res.body.message, 'Welcome to Events Manager API');
    });
    done();
  });

  it('Sorry Page Not Found!', function (done) {
    (0, _supertest2.default)(_app2.default).get('/dat').expect(404).then(function (res) {
      _chai.assert.deepEqual(res.body.message, 'Sorry Page Not Found!');
    });
    done();
  });

  it('Account Created as an admin', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/users').send({
      password: 'password',
      email: 'abcd@gmail.com',
      username: 'blvck',
      firstname: 'samuel',
      lastname: 'abudu',
      isAdmin: true
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(201);
      done();
    });
  });

  it('Account Created as a user', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/users').send({
      password: 'password',
      email: 'abc@gmail.com',
      username: 'leumas',
      firstname: 'testing',
      lastname: 'this'
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(201);
      done();
    });
  });

  it('cannot signup with the same email', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/users').send({
      password: 'password',
      email: 'abcd@gmail.com',
      username: 'blvck',
      firstname: 'samuel',
      lastname: 'abudu',
      isAdmin: true
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(403);
      done();
    });
  });

  it('cannot signup with the same username', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/users').send({
      password: 'password',
      email: 'abgh@gmail.com',
      username: 'blvck',
      firstname: 'samugfdel',
      lastname: 'abudgfdu',
      isAdmin: true
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(403);
      done();
    });
  });

  it('Sign in successful as an admin', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/users/login').send({
      password: 'password',
      username: 'blvck'
    }).end(function (err, res) {
      adminToken = res.body.token;
      console.log('Admin token', adminToken);
      (0, _chai.expect)(res.status).to.equal(200);
      done();
    });
  });

  it('Sign in successful as a user', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/users/login').send({
      password: 'password',
      username: 'leumas'
    }).end(function (err, res) {
      userToken = res.body.token;
      console.log('User token', userToken);
      (0, _chai.expect)(res.status).to.equal(200);
      done();
    });
  });

  it('unsuccessful Sign in with wrong password', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/users/login').send({
      password: 'passwor',
      username: 'blvckgfg'
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(400);
      done();
    });
  });

  it('create an event center as an admin and set availability to be true', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/centers').set('x-access-token', adminToken).send({
      name: 'Hall of Fame',
      capacity: 1234,
      location: 'ikeja',
      price: 50000,
      state: 'lagos',
      description: 'Lorem ipsum',
      image: 'lovely image',
      isAvailable: true
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(201);
      done();
    });
  });

  it('modify an event center as an admin and set availability to be true', function (done) {
    (0, _supertest2.default)(_app2.default).put('/api/v1/centers/1').set('x-access-token', adminToken).send({
      name: 'Halsl of Fame',
      capacity: 1234,
      location: 'ikeja',
      price: 50000,
      state: 'lagos',
      description: 'Lorem ipsum',
      image: 'lovely image',
      isAvailable: true
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(200);
      done();
    });
  });

  it('can not modify an event center as a user', function (done) {
    (0, _supertest2.default)(_app2.default).put('/api/v1/centers/1').set('x-access-token', userToken).send({
      name: 'Halsl of Fame',
      capacity: 1234,
      location: 'ikeja',
      price: 50000,
      state: 'lagos',
      description: 'Lorem ipsum',
      image: 'lovely image',
      isAvailable: true
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(401);
      done();
    });
  });

  it('center not found', function (done) {
    (0, _supertest2.default)(_app2.default).put('/api/v1/centers/111').set('x-access-token', adminToken).send({
      name: 'Halsl of Fame',
      capacity: 1234,
      location: 'ikeja',
      price: 50000,
      state: 'lagos',
      description: 'Lorem ipsum',
      image: 'lovely image',
      isAvailable: true
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(400);
      done();
    });
  });

  it('cant modify with empty name field', function (done) {
    (0, _supertest2.default)(_app2.default).put('/api/v1/centers/1').set('x-access-token', adminToken).send({
      name: '',
      capacity: 1234,
      location: 'ikeja',
      price: 50000,
      state: 'lagos',
      description: 'Lorem ipsum',
      image: 'lovely image',
      isAvailable: true
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(400);
      done();
    });
  });

  it('cant modify with empty name field', function (done) {
    (0, _supertest2.default)(_app2.default).put('/api/v1/centers/1').set('x-access-token', 'jhhhsudhdhshd').send({
      name: 'dadffa',
      capacity: 1234,
      location: 'ikeja',
      price: 50000,
      state: 'lagos',
      description: 'Lorem ipsum',
      image: 'lovely image',
      isAvailable: true
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(500);
      done();
    });
  });

  it('create an event center as an admin and set availability to be false', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/centers').set('x-access-token', adminToken).send({
      name: 'Grand Ovation',
      capacity: 1234,
      location: 'ikeja',
      price: 50000,
      state: 'lagos',
      description: 'Lorem ipsum',
      image: 'lovely image',
      isAvailable: false
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(201);
      done();
    });
  });

  it('can not create center as a user', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/centers').set('x-access-token', userToken).send({
      name: 'Hall of Fame',
      capacity: 1234,
      location: 'ikeja',
      price: 50000,
      state: 'lagos',
      description: 'Lorem ipsum',
      image: 'lovely image',
      isAvailable: true
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(401);
      done();
    });
  });

  it('should get all centers by either Admin or User', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/centers').set('x-access-token', adminToken).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(200);
      done();
    });
  });

  it('should give an error without token', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/centers').set('x-access-token', '').end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(401);
      done();
    });
  });

  it('should enable users retrieve a center', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/centers/1').set('x-access-token', userToken).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(200);
      done();
    });
  });

  it('should return center not found', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/centers/24').set('x-access-token', userToken).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(404);
      done();
    });
  });

  it('should return center not found', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/centers/13').set('x-access-token', userToken).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(404);
      done();
    });
  });

  it('check if center is availale while creating an event', function (done) {
    var object = {
      centerId: 2,
      userId: 2,
      title: 'wedding tour',
      date: '23-12-23',
      time: '12:32:11 am',
      type: 'church',
      image: 'image.com',
      description: 'lorem'
    };

    (0, _supertest2.default)(_app2.default).post('/api/v1/events').set('x-access-token', adminToken).send(object).end(function (err, res) {
      console.log('==================================>', object);
      (0, _chai.expect)(res.status).to.equal(404);
      done();
    });
  });

  it('create event', function (done) {
    var object = {
      centerId: 1,
      userId: 2,
      title: 'wedding tour',
      date: '12-12-13',
      time: '12:32:11 pm',
      type: 'church',
      image: 'image.com',
      description: 'lorem'
    };

    (0, _supertest2.default)(_app2.default).post('/api/v1/events').set('x-access-token', userToken).send(object).end(function (err, res) {
      console.log('==================================>', object);
      (0, _chai.expect)(res.status).to.equal(400);
      done();
    });
  });
});

exports.default = _app2.default;