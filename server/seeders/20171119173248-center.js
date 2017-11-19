module.exports = {
  up: (queryInterface) => {
    queryInterface.bulkInsert('center', [{
      id: 1,
      capacity: 450,
      price: 50000,
      name: 'Hall of Fame',
      state: 'Lagos',
      address: '34, Ikoyi street',
      description: 'conferences, ceremonies, weddings, formal parties, concerts',
      image: 'www.image.com'
    }], {});
  },

  down: (queryInterface) => {
    queryInterface.bulkDelete('Person', null, {});
  }
};
