import request from 'supertest';
import { expect } from 'chai';
import app from '../../app';

let userToken;
let userToken2;

describe('Events Manager', () => {
  before((done) => {
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
      });
    request(app)
      .post('/api/v1/users/login')
      .set('Connection', 'keep alive')
      .set('Content-Type', 'application/json')
      .send({
        password: 'password',
        username: 'semo',
      })
      .end((error, response) => {
        userToken2 = response.body.token;
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
      .set('x-access-token', userToken)
      .send(object)
      .end((err, res) => {
        expect(res.status).to.equal(403);
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

  it('create event', (done) => {
    request(app)
      .post('/api/v1/events')
      .set('x-access-token', userToken)
      .send({
        userId: 2,
        centerId: 1,
        title: 'wedding for tour',
        date: '2014-02-01',
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

  it('center has been booked', (done) => {
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
        expect(res.status).to.equal(409);
        expect(res.body.message).to.equal('Center has been booked');

        done();
      });
  });

  it('center has been booked', (done) => {
    request(app)
      .put('/api/v1/events/event/14')
      .set('x-access-token', userToken)
      .send({
        userId: 2,
        centerId: 1,
        title: 'wedding tour updated',
        date: '2014-03-01',
        time: '12:32:11 pm',
        type: 'church',
        image: 'image.com',
        description: 'lorem is the best'
      })
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal('Event Not Found!');

        done();
      });
  });

  it('center has been booked', (done) => {
    request(app)
      .put('/api/v1/events/event/2')
      .set('x-access-token', userToken)
      .send({
        userId: 2,
        centerId: 1,
        title: 'wedding tour updated',
        date: '2014-03-01',
        time: '12:32:11 pm',
        type: 'church',
        image: 'image.com',
        description: 'lorem is the best'
      })
      .end((err, res) => {
        expect(res.status).to.equal(409);
        expect(res.body.message).to.equal('center has been booked');

        done();
      });
  });

  it('event error', (done) => {
    request(app)
      .post('/api/v1/events/')
      .set('x-access-token', userToken2)
      .send({})
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('All Fields are required');

        done();
      });
  });

  it('center has been booked', (done) => {
    request(app)
      .put('/api/v1/events/event/2')
      .set('x-access-token', userToken)
      .send({
        userId: 2,
        centerId: 1,
        title: 'wedding tour updated',
        date: '2014-03-22',
        time: '12:32:11 pm',
        type: 'church',
        image: 'image.com',
        description: 'lorem is the best'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Event modification is successful');

        done();
      });
  });

  it('center has been booked', (done) => {
    request(app)
      .put('/api/v1/events/event/2')
      .set('x-access-token', userToken)
      .send({
        userId: 2,
        centerId: 1,
        title: 'wedding tour updated',
        time: '12:32:11 pm',
        type: 'church',
        image: 'image.com',
        description: 'lorem is the best'
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Date Field required');

        done();
      });
  });


  it('unatuthorised editing of event', (done) => {
    request(app)
      .put('/api/v1/events/event/2')
      .set('x-access-token', userToken2)
      .send({
        userId: 2,
        centerId: 1,
        title: 'wedding tour updated',
        date: '2014-02-01',
        time: '12:32:11 pm',
        type: 'church',
        image: 'image.com',
        description: 'lorem is the best'
      })
      .end((err, res) => {
        expect(res.status).to.equal(422);
        expect(res.body.message).to.equal('You are not Authorized to edit this event!');

        done();
      });
  });

  it('test', (done) => {
    request(app)
      .put('/api/v1/events/event/2')
      .set('x-access-token', userToken)
      .send({
        userId: 12,
        centerId: 6,
        title: 'wedding tour updated',
        date: '2014-02-26',
        time: '12:32:11 pm',
        type: 'church',
        image: 'image.com',
        description: 'lorem is the best'
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);

        done();
      });
  });


  it('found single event', (done) => {
    request(app)
      .get('/api/v1/events/event/1')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Event Found');
        done();
      });
  });

  it('parameter must be a number', (done) => {
    request(app)
      .get('/api/v1/events/event/fhg')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Parameter must be a number!');
        done();
      });
  });


  it('can\'t delete another user event', (done) => {
    request(app)
      .delete('/api/v1/events/event/1')
      .set('x-access-token', userToken2)
      .end((err, res) => {
        expect(res.status).to.equal(422);
        expect(res.body.message).to.equal('You are not Authorized to delete this event!');
        done();
      });
  });

  it('delete event', (done) => {
    request(app)
      .delete('/api/v1/events/event/1')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Event Deleted!');

        done();
      });
  });


  it('event not found', (done) => {
    request(app)
      .delete('/api/v1/events/event/12')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal('Event Not Found');

        done();
      });
  });

  it('event not found', (done) => {
    request(app)
      .delete('/api/v1/events/event/2')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Event Deleted!');

        done();
      });
  });


  it('get latest events', (done) => {
    request(app)
      .get('/api/v1/events/latest')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Events Found');

        done();
      });
  });

  it('all events not found', (done) => {
    request(app)
      .get('/api/v1/events/event/1')
      .set('x-access-token', userToken2)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal('Event Not Found');
        done();
      });
  });

  it('Fetch first page of events created by the user', (done) => {
    request(app)
      .get('/api/v1/events/user/events?page=1')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('Fetch first six events of all events in the database', (done) => {
    request(app)
      .get('/api/v1/events?page=1')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('Fetch first six events of all events slated for a center', (done) => {
    request(app)
      .get('/api/v1/events/center/1/?page=1')
      .set('x-access-token', userToken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
