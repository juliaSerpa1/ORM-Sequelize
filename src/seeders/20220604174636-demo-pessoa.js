'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Pessoas', [
      {
      nome: 'Ana Souza',
      ativo: true,
      email: 'ana@email.com',
      role:'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      nome: 'Marcos Cintra',
      ativo: true,
      email: 'marcos@email.com',
      role:'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      nome: 'Pedro Paulo',
      ativo: true,
      email: 'pedro@email.com',
      role:'professor',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      nome: 'Livia Alline',
      ativo: true,
      email: 'alline@email.com',
      role:'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
