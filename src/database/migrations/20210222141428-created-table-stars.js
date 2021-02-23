module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stars', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { // Forein Key
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE', // Modelo cascata
        onUpdate: 'CASCADE', // se alterar o id automaticamente alterara a fk
      },
      repository_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { // Forein Key
          model: 'repositories',
          key: 'id',
        },
        onDelete: 'CASCADE', // Modelo cascata
        onUpdate: 'CASCADE', // se alterar o id automaticamente alterara a fk
      },
      status: {
        type: Sequelize.CHAR,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('stars');
  },
};
