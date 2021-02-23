module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('photos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('photos');
  },
};
