import Sequelize, { Model } from 'sequelize';
import Repository from './Repository';

export default class Stars extends Model {
  static init(sequelize) {
    super.init({
      user_id: Sequelize.INTEGER,
      repository_id: Sequelize.INTEGER,
      status: Sequelize.CHAR,

    }, {
      sequelize,
      tableName: 'stars',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsTo(Repository, { foreignKey: 'repository_id' });
  }
}
