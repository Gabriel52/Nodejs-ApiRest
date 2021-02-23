import Sequelize, { Model } from 'sequelize';

export default class Tokens extends Model {
  static init(sequelize) {
    super.init({
      user_id: Sequelize.STRING,

    }, {
      sequelize,
      tableName: 'tokens',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' }); // Muitas fotos pertence a um aluno e dizendo qual coluna é a fk
  }
}
