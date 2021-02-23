module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('repositories', {
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
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      public: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('repositories');
  },
};
