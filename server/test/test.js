import request from 'supertest';
import { expect, assert } from 'chai';
import app from '../app';

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

  it('Account Created', (done) => {
    request(app)
      .post('/api/v1/users')
      .send({
        password: 'password',
        email: 'abghghc@gmail.com',
        username: 'blvckgfg',
        firstname: 'samugfdel',
        lastname: 'abudgfdu',
        isAdmin: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
  });

  it('Sign in successful', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send({
        password: 'password',
        username: 'blvckgfg',
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});

export default app;
