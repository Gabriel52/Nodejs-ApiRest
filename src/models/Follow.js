import Sequelize, { Model } from 'sequelize';

export default class Follow extends Model {
  static init(sequelize) {
    super.init({
      user_id: Sequelize.INTEGER,
      following: Sequelize.INTEGER,
      status: Sequelize.CHAR,

    }, {
      sequelize,
      tableName: 'follows',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' }); // Muitas fotos pertence a um usuario e dizendo qual coluna é a fk
  }
}
