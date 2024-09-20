// src/seeders/YYYYMMDDHHMMSS-demo-usuarios.js
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'Juan Perez',
        email: 'juan.perez@example.com',
        password: 'hashed_password', // Asegúrate de usar contraseñas encriptadas
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Maria Lopez',
        email: 'maria.lopez@example.com',
        password: 'hashed_password',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};

