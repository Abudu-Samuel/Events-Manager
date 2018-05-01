import request from 'supertest';
import { expect } from 'chai';
import app from '../../app';

describe('Events Manager - User Test', () => {
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
        expect(typeof res.body.responseData.username).to.equal('string');
        expect(typeof res.body.responseData.username).to.equal('string');
        done();
      });
  });

  it('Account Created as the first user', (done) => {
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

  it('Account Created as the second user', (done) => {
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
        expect(res.status).to.equal(409);
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
        expect(res.status).to.equal(409);
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
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Sign in Successful!');
        done();
      });
  });

  it('unsuccessful sign in', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send({
        password: '123',
        username: 'leumas',
      })
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body.message).to.equal('Invalid username or password');
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
        expect(res.status).to.equal(401);
        expect(res.body.message).to.equal('Invalid username or password');
        done();
      });
  });
});

export default app;
