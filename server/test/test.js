import request from 'supertest';
import { expect, assert } from 'chai';
import app from '../app';

let adminToken;
let userToken;
let userToken2;

describe('Events Manager', () => {
  it('should return Welcome to Events Manager API', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .then((res) => {
        assert.deepEqual(res.body.message, 'Welcome to Events Manager API');
      });
    done();
  });

  it('Sorry Page Not Found!', (done) => {
    request(app)
      .get('/dat')
      .expect(404)
      .then((res) => {
        assert.deepEqual(res.body.message, 'Sorry Page Not Found!');
      });
    done();
  });

  it('Account Created as an admin', (done) => {
    request(app)
      .post('/api/v1/users')
      .send({
        password: 'password',
        email: 'abcd@gmail.com',
        username: 'blvck',
        firstname: 'samuel',
        lastname: 'abudu',
        isAdmin: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(typeof res.body.responseData.username).to.equal("string");
        expect(typeof res.body.responseData.username).to.equal("string");
        done();
      });
  });

  it('Account Created as a user', (done) => {
    request(app)
      .post('/api/v1/users')
      .send({
        password: 'password',
        email: 'abc@gmail.com',
        username: 'leumas',
        firstname: 'testing',
        lastname: 'this',
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect((res.body.responseData.username).length).to.equal(6);
        done();
      });
  });

  it('Account Created as a user', (done) => {
    request(app)
      .post('/api/v1/users')
      .send({
        password: 'password',
        email: 'sammyforyou@gmail.com',
        username: 'semo',
        firstname: 'testing',
        lastname: 'this',
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect((res.body.responseData.username).length).to.equal(4);
        done();
      });
  });

  it('cannot signup with the same email', (done) => {
    request(app)
      .post('/api/v1/users')
      .send({
        password: 'password',
        email: 'abcd@gmail.com',
        username: 'blvck',
        firstname: 'samuel',
        lastname: 'abudu',
        isAdmin: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(403);
        expect(res.body.message).to.equal('user already exist');
        done();
      });
  });

  it('cannot signup with the same username', (done) => {
    request(app)
      .post('/api/v1/users')
      .send({
        password: 'password',
        email: 'abgh@gmail.com',
        username: 'blvck',
        firstname: 'samuelson',
        lastname: 'abuduone',
        isAdmin: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(403);
        expect(res.body.message).to.equal('user already exist');
        done();
      });
  });

  it('Sign in successful as an admin', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send({
        password: 'password',
        username: 'blvck',
      })
      .end((err, res) => {
        adminToken = res.body.token;
        console.log('Admin token', adminToken);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Sign in Successful!');
        done();
      });
  });

  it('Sign in successful as a user', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send({
        password: 'password',
        username: 'leumas',
      })
      .end((err, res) => {
        userToken = res.body.token;
        console.log('User token', userToken);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Sign in Successful!');
        done();
      });
  });

  it('Sign in successful as second user', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send({
        password: 'password',
        username: 'semo',
      })
      .end((err, res) => {
        userToken2 = res.body.token;
        console.log('User token', userToken);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Sign in Successful!');
        done();
      });
  });

  it('unsuccessful Sign in with wrong password', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send({
        password: 'passwor',
        username: 'blvckgfg',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Incorrect signin credentials');
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
        expect(typeof res.body.createdCenter.created.price).to.equal('number');
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
      .put('/api/v1/centers/1')
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
      .put('/api/v1/centers/1')
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
        expect(res.body.message).to.equal('You are not Authorized to edit this center!');
        done();
      });
  });

  it('center not found', (done) => {
    request(app)
      .put('/api/v1/centers/111')
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

  it('cant modify with empty name field', (done) => {
    request(app)
      .put('/api/v1/centers/1')
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

  it('cant modify with empty name field', (done) => {
    request(app)
      .put('/api/v1/centers/1')
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

  it('image field is required', (done) => {
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

  it('image field is required', (done) => {
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

  it('image field is required', (done) => {
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

  it('image field is required', (done) => {
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

  it('should get all centers by either Admin or User', (done) => {
    request(app)
      .get('/api/v1/centers')
      .set('x-access-token', adminToken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('should give an error without token', (done) => {
    request(app)
      .get('/api/v1/centers')
      .set('x-access-token', '')
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
  });

  it('should enable users retrieve a center', (done) => {
    request(app)
      .get('/api/v1/centers/1')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('should return center not found', (done) => {
    request(app)
      .get('/api/v1/centers/24')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });

  it('should return center not found', (done) => {
    request(app)
      .get('/api/v1/centers/13')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });


  // it('parameter must be a number', (done) => {
  //   request(app)
  //     .get('/api/v1/centers/fhg')
  //     .set('x-access-token', userToken)
  //     .end((err, res) => {
  //       expect(res.status).to.equal(400);
  //       expect(res.body.message).to.equal('Parameter must be a number!');
  //       done();
  //     });
  // });

  it('check if center is availale while creating an event', (done) => {
    const object = {
      centerId: 2,
      userId: 2,
      title: 'wedding tour',
      date: '23-12-23',
      time: '12:32:11 am',
      type: 'church',
      image: 'image.com',
      description: 'lorem'
    };

    request(app)
      .post('/api/v1/events')
      .set('x-access-token', adminToken)
      .send(object)
      .end((err, res) => {
        console.log('==================================>', object);
        expect(res.status).to.equal(404);
        done();
      });
  });

  it('create event', (done) => {
    request(app)
      .post('/api/v1/events')
      .set('x-access-token', userToken)
      .send({
        userId: 2,
        centerId: 1,
        title: 'wedding tour',
        date: '2014-03-01',
        time: '12:32:11 pm',
        type: 'church',
        image: 'image.com',
        description: 'lorem is the best'
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.message).to.equal('Event Created!');

        done();
      });
  });

  it('parameter must be a number', (done) => {
    request(app)
      .get('/api/v1/events/fhg')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Parameter must be a number!');
        done();
      });
  });

  it('parameter must be a number', (done) => {
    request(app)
      .get('/api/v1/centers/fhg')
      .set('x-access-token', adminToken)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Parameter must be a number!');
        done();
      });
  });

  it(`can't delete another user event`, (done) => {
    request(app)
      .delete('/api/v1/events/1')
      .set('x-access-token', userToken2)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body.message).to.equal('You are not Authorized to delete this event!');
        done();
      });
  });

  it('delete event', (done) => {
    request(app)
      .delete('/api/v1/events/1')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Event Deleted!');

        done();
      });
  });

});

export default app;
