import { expect } from 'chai';
import models from '../../models';

const { event } = models;

describe('Event Model', () => {
  describe('Create User', () => {
    it('should throw an error if no event name is provided when creating an event', (done) => {
      event.create({
        userId: 1,
        centerId: 1,
        date: '2018-03-07',
        type: 'wedding',
        image: 'www.image.com',
        description: 'Awesome event for youths'
      })
        .catch((error) => {
          expect(error.errors[0].message).to.equal('event.title cannot be null');
          expect(error.errors[0].type === 'notNull Violation');
        });
      done();
    });
  });
});
