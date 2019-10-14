'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('items', [
      {
        name: "Cheese Pizza",
        size: "Small",
        status: "available",
        price: 4.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Cheese Pizza",
        size: "Medium",
        status: "available",
        price: 6.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Cheese Pizza",
        size: "Large",
        status: "available",
        price: 9.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Hawaiian Pizza",
        size: "Small",
        status: "available",
        price: 4.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Hawaiian Pizza",
        size: "Medium",
        status: "available",
        price: 6.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Hawaiian Pizza",
        size: "Large",
        status: "available",
        price: 9.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Margarita Pizza",
        size: "Small",
        status: "available",
        price: 4.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Margarita Pizza",
        size: "Medium",
        status: "available",
        price: 6.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Margarita Pizza",
        size: "Large",
        status: "available",
        price: 9.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Marinara Pizza",
        size: "Small",
        status: "available",
        price: 4.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Marinara Pizza",
        size: "Medium",
        status: "available",
        price: 6.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Marinara Pizza",
        size: "Large",
        status: "available",
        price: 9.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Salami Pizza",
        size: "Small",
        status: "available",
        price: 4.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Salami Pizza",
        size: "Medium",
        status: "available",
        price: 6.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Salami Pizza",
        size: "Large",
        status: "available",
        price: 9.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Bolona Pizza",
        size: "Large",
        status: "available",
        price: 9.50,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('items', [{
    }])
  }
};
