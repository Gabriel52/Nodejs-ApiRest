import Sequelize, { Model } from 'sequelize';

export default class Photos extends Model {
  static init(sequelize) {
    super.init({
      originalname: Sequelize.STRING,
      filename: Sequelize.STRING,
      user_id: Sequelize.STRING,

    }, {
      sequelize,
      tableName: 'photos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' }); // Muitas fotos pertence a um aluno e dizendo qual coluna é a fk
  }
}
