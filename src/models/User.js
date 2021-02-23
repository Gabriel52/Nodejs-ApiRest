import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      status: Sequelize.CHAR,
      localization: Sequelize.STRING,
      username: Sequelize.STRING,
      bio: Sequelize.TEXT,

    }, {
      sequelize,
    });
    return this;
  }
}
