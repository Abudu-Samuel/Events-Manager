module.exports = {
  up: (queryInterface) => {
   return queryInterface.bulkInsert('user', [{
      id: 1,
      firstname: 'David',
      lastname: 'Blind',
      username: 'admin',
      email: 'david@gmail.com',
      password: 'password',
      isAdmin: true
    }, {
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Person', null, {});
  }
};
