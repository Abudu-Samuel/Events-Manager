import { expect } from 'chai';
import models from '../../models';

const { user } = models;

describe('User Model', () => {
  describe('Create User', () => {
    it('should throw an error if no password is provided when during creation', (done) => {
      user.create({
        email: 'abcd@gmail.com',
        username: 'blvck',
        firstname: 'samuel',
        lastname: 'abudu',
        isAdmin: true
      })
        .catch((error) => {
          expect(error.errors[0].message).to.equal('user.password cannot be null');
          expect(error.errors[0].type === 'notNull Violation');
        });
      done();
    });
  });
});
