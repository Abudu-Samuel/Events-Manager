import { expect } from 'chai';
import models from '../../models';

const { center } = models;

describe('Center Model', () => {
  describe('create Center', () => {
    it('should throw an error if no center name is provided when creating a center', (done) => {
      center.create({
        capacity: 2,
        location: 'ikeja',
        price: 35,
        state: 'lagos',
        description: 'example',
        image: 'www.image.com',
        isAvailable: true
      })
        .catch((error) => {
          expect(error.errors[0].message).to.equal('center.name cannot be null');
          expect(error.errors[0].type === 'notNull Violation');
        });
      done();
    });
  });
});

