import request from 'supertest';
import { expect } from 'chai';
import app from '../../app';

let adminToken;
let userToken;

describe('Events Manager - Center Test', () => {
  before((done) => {
    request(app)
      .post('/api/v1/users/login')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send({
        password: 'password',
        username: 'blvck',
      })
      .end((error, response) => {
        adminToken = response.body.token;
      });
    request(app)
      .post('/api/v1/users/login')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .send({
        password: 'password',
        username: 'leumas',
      })
      .end((error, response) => {
        userToken = response.body.token;
        done();
      });
  });
  it('create an event center as an admin and set availability to be true', (done) => {
    request(app)
      .post('/api/v1/centers')
      .set('x-access-token', adminToken)
      .send({
        name: 'Hall of Fame',
        capacity: 1234,
        location: 'ikeja',
        price: 50000,
        state: 'lagos',
        description: 'Lorem ipsum',
        image: 'lovely image',
        isAvailable: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(typeof res.body.created.price).to.equal('number');
        done();
      });
  });

  it('availability must be a boolean', (done) => {
    request(app)
      .post('/api/v1/centers/')
      .set('x-access-token', adminToken)
      .send({
        name: 'Hall of Fame',
        capacity: 1234,
        location: 'ikeja',
        price: 50000,
        state: 'lagos',
        description: 'Lorem ipsum',
        image: 'lovely image',
        isAvailable: 45
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Is Available must be a boolean');
        done();
      });
  });

  it('modify an event center as an admin and set availability to be true', (done) => {
    request(app)
      .put('/api/v1/centers/center/1')
      .set('x-access-token', adminToken)
      .send({
        name: 'Halsl of Fame',
        capacity: 1234,
        location: 'ikeja',
        price: 50000,
        state: 'lagos',
        description: 'Lorem ipsum',
        image: 'lovely image',
        isAvailable: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Center modification is successful');
        done();
      });
  });

  it('can not modify an event center as a user', (done) => {
    request(app)
      .put('/api/v1/centers/center/1')
      .set('x-access-token', userToken)
      .send({
        name: 'Halsl of Fame',
        capacity: 1234,
        location: 'ikeja',
        price: 50000,
        state: 'lagos',
        description: 'Lorem ipsum',
        image: 'lovely image',
        isAvailable: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body.message).to.equal('You are not authorized to view this page');
        done();
      });
  });

  it('center not found', (done) => {
    request(app)
      .put('/api/v1/centers/center/111')
      .set('x-access-token', adminToken)
      .send({
        name: 'Halsl of Fame',
        capacity: 1234,
        location: 'ikeja',
        price: 50000,
        state: 'lagos',
        description: 'Lorem ipsum',
        image: 'lovely image',
        isAvailable: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Center Not Found!');
        done();
      });
  });

  it('can\'t modify with empty name field', (done) => {
    request(app)
      .put('/api/v1/centers/center/1')
      .set('x-access-token', adminToken)
      .send({
        name: '',
        capacity: 1234,
        location: 'ikeja',
        price: 50000,
        state: 'lagos',
        description: 'Lorem ipsum',
        image: 'lovely image',
        isAvailable: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Name Field required');
        done();
      });
  });

  it('can\'t modify center with invalid token', (done) => {
    request(app)
      .put('/api/v1/centers/center/1')
      .set('x-access-token', 'jhhhsudhdhshd')
      .send({
        name: 'dadffa',
        capacity: 1234,
        location: 'ikeja',
        price: 50000,
        state: 'lagos',
        description: 'Lorem ipsum',
        image: 'lovely image',
        isAvailable: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(500);
        done();
      });
  });

  it('create an event center as an admin and set availability to be false', (done) => {
    request(app)
      .post('/api/v1/centers')
      .set('x-access-token', adminToken)
      .send({
        name: 'Grand Ovation',
        capacity: 1234,
        location: 'ikeja',
        price: 50000,
        state: 'lagos',
        description: 'Lorem ipsum',
        image: 'lovely image',
        isAvailable: false
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
  });

  it('can not create center as a user', (done) => {
    request(app)
      .post('/api/v1/centers')
      .set('x-access-token', userToken)
      .send({
        name: 'Hall of Fame',
        capacity: 1234,
        location: 'ikeja',
        price: 50000,
        state: 'lagos',
        description: 'Lorem ipsum',
        image: 'lovely image',
        isAvailable: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
  });

  it('image field is required', (done) => {
    request(app)
      .post('/api/v1/centers')
      .set('x-access-token', adminToken)
      .send({
        name: 'Hall of Fame',
        capacity: 1234,
        location: 'ikeja',
        price: 50000,
        state: 'lagos',
        description: 'Lorem ipsum',
        image: '',
        isAvailable: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Image Field required');
        done();
      });
  });

  it('description field is required', (done) => {
    request(app)
      .post('/api/v1/centers')
      .set('x-access-token', adminToken)
      .send({
        name: 'Hall of Fame',
        capacity: 1234,
        location: 'ikeja',
        price: 50000,
        state: 'lagos',
        description: '',
        image: 'happyimage.jpg',
        isAvailable: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Description Field required');
        done();
      });
  });

  it('state field is required', (done) => {
    request(app)
      .post('/api/v1/centers')
      .set('x-access-token', adminToken)
      .send({
        name: 'Hall of Fame',
        capacity: 1234,
        location: 'ikeja',
        price: 50000,
        state: '',
        description: 'testing',
        image: 'happyimage.jpg',
        isAvailable: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('State Field required');
        done();
      });
  });

  it('price field is required', (done) => {
    request(app)
      .post('/api/v1/centers')
      .set('x-access-token', adminToken)
      .send({
        name: 'Hall of Fame',
        capacity: 1234,
        location: 'ikeja',
        price: '',
        state: 'lagos',
        description: 'testing',
        image: 'happyimage.jpg',
        isAvailable: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Price Field required');
        done();
      });
  });

  it('location field is required', (done) => {
    request(app)
      .post('/api/v1/centers')
      .set('x-access-token', adminToken)
      .send({
        name: 'Hall of Fame',
        capacity: 1234,
        location: '',
        price: 50000,
        state: 'lagos',
        description: 'testing',
        image: 'happyimage.jpg',
        isAvailable: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Location Field required');
        done();
      });
  });

  it('capacity field is required', (done) => {
    request(app)
      .post('/api/v1/centers')
      .set('x-access-token', adminToken)
      .send({
        name: 'Hall of Fame',
        capacity: '',
        location: 'ikeja',
        price: 50000,
        state: 'lagos',
        description: 'testing',
        image: 'happyimage.jpg',
        isAvailable: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Capacity Field required');
        done();
      });
  });

  it('All fields are required', (done) => {
    request(app)
      .post('/api/v1/centers')
      .set('x-access-token', adminToken)
      .send({})
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('All Fields are required');
        done();
      });
  });

  it('should get all centers by either Admin or User for the first six centers', (done) => {
    request(app)
      .get('/api/v1/centers?page=1')
      .set('x-access-token', adminToken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });


  it('should give an error without token', (done) => {
    request(app)
      .get('/api/v1/centers/')
      .set('x-access-token', '')
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
  });


  it('should enable users retrieve a center', (done) => {
    request(app)
      .get('/api/v1/centers/center/1')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('should get latest centers', (done) => {
    request(app)
      .get('/api/v1/centers/latest/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('should return center not found', (done) => {
    request(app)
      .get('/api/v1/centers/center/24')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });

  it('should return center not found', (done) => {
    request(app)
      .get('/api/v1/centers/center/13')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });

  it('parameter must be a number', (done) => {
    request(app)
      .get('/api/v1/centers/center/fhg')
      .set('x-access-token', adminToken)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Parameter must be a number!');
        done();
      });
  });
});
