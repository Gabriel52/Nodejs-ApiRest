import Sequelize, { Model } from 'sequelize';

export default class Repositories extends Model {
  static init(sequelize) {
    super.init({
      user_id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      description: Sequelize.TEXT,
      slug: Sequelize.STRING,
      status: Sequelize.CHAR,
      public: Sequelize.BOOLEAN,

    }, {
      sequelize,
      tableName: 'repositories',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' }); // Muitas fotos pertence a um aluno e dizendo qual coluna é a fk
  }
}
