import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User';
import Token from '../models/Token';

dotenv.config();

class UserController {
  async authentication(req, res) {
    const { email, password } = req.body;

    try {
      User.findOne({ where: { email } }).then((user) => {
        if (user == null || user === undefined || user === '') {
          res.status(401).json({ message: 'Credenciais invalidas', success: false });
        } else if (user.email !== undefined) {
          const correct = bcrypt.compareSync(password, user.password);
          if (correct) {
            jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '24h' }, (error, token) => {
              if (error) {
                res.statusCode = 400;
                res.json({ success: false, error: 'Falha interna' });
              } else {
                const user_id = user.id;
                Token.create({
                  user_id,
                });
                res.statusCode = 200;
                res.json({ success: true, token, user: { nome: user.nome, email, id: user.id } });
              }
            });
          } else {
            res.status(401).json({ message: 'Credenciais invalidas', success: false });
          }
        }
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.errors.map((err) => err.message), success: false });
    }
  }

  async index(req, res) {
    try {
      const indexUser = await Token.findAll({
        include: [{
          model: User,
          required: true,
        }],
      });
      res.status(200).json({ success: true, data: indexUser });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: 'Erro interno' });
    }
  }
}

export default new UserController();
