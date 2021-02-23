import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// All models
import User from '../models/User';
import Photo from '../models/Photo';
import Token from '../models/Token';
import Follow from '../models/Follow';
import Repository from '../models/Repository';
import Star from '../models/Star';

const models = [User, Photo, Token, Follow, Repository, Star];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
// Checando se tem o método associate que serve para associar as tabelas
models.forEach((model) => model.associate && model.associate(connection.models));
