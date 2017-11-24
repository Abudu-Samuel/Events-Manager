import request from 'supertest';
import { expect, assert } from 'chai';
import app from '../app';

let adminToken;
let userToken;

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
        firstname: 'samugfdel',
        lastname: 'abudgfdu',
        isAdmin: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(403);
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
    const object = {
      centerId: 1,
      userId: 2,
      title: 'wedding tour',
      date: '12-12-13',
      time: '12:32:11 pm',
      type: 'church',
      image: 'image.com',
      description: 'lorem'
    };

    request(app)
      .post('/api/v1/events')
      .set('x-access-token', userToken)
      .send(object)
      .end((err, res) => {
        console.log('==================================>', object);
        expect(res.status).to.equal(400);
        done();
      });
  });
});

export default app;
