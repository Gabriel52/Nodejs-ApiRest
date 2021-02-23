import bcrypt from 'bcryptjs';
import User from '../models/User';

require('dotenv').config();

class UserController {
  async store(req, res) {
    const {
      name, email, password, username, bio, localization,
    } = req.body;

    const verifyUser = await User.findOne({ where: { email } });
    console.log(name, password, username, bio, localization);
    if (verifyUser === null || verifyUser === undefined) {
      const salt = bcrypt.genSaltSync(10);
      const encrypted = bcrypt.hashSync(password, salt);
      try {
      // eslint-disable-next-line no-unused-vars
        const userStore = await User.create({
          name,
          email,
          password: encrypted,
          username,
          localization,
          status: 'A',
          bio,
        });
        res.status(201).json({ success: true, message: `${name} criado com sucesso` });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: 'Erro interno' });
      }
    } else {
      res.status(400).json({ success: false, message: 'Usuário já existe' });
    }
  }

  async index(req, res) {
    try {
      const userIndex = await User.findAll({
        raw: true,
        where: {
          status: 'A',
        },
      });
      res.status(200).json({ success: true, data: userIndex });
    } catch (error) {
      console.log(error);
      res.status(400).status({ success: false, message: 'erro interno' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const verifyUser = await User.findOne({ where: { id } });
      if (verifyUser.status === 'D') {
        res.status(400).json({ success: false, message: 'Usuario inexistente' });
      }
      const userDelete = await User.update({
        status: 'D',
      }, {
        where: { id },
      });
      console.log(userDelete);
      res.status(200).json({ success: true, message: 'Deletado com sucesso' });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: 'Erro interno' });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      name, username, bio, localization,
    } = req.body;
    try {
      const verifyUserUpdate = await User.findOne({ where: { id } });
      if (verifyUserUpdate === null) {
        res.status(400).json({ success: true, message: 'Usuario inexistente' });
      } else {
        const userUpdate = await User.update({
          name,
          username,
          bio,
          localization,
        }, {
          where: {
            id,
          },
        });
        console.log(userUpdate);
        res.status(200).json({ success: true, message: 'Atualizado com sucesso' });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: 'Erro interno' });
    }
  }
}

export default new UserController();
