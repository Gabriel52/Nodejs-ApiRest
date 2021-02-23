import Follow from '../models/Follow';
import User from '../models/User';
import conn from '../config/rawDatabase';

class FollowController {
  async store(req, res) {
    const user_id = req.loggedUser.id;
    const { following } = req.body;

    try {
      await Follow.create({
        user_id,
        following,
        status: 'A',
      });
      const userFollow = await User.findOne({ where: { id: following } });
      res.status(201).json({ success: true, message: `Você está seguindo ${userFollow.name}` });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: 'Erro interno' });
    }
  }

  async index(req, res) {
    const { id } = req.loggedUser;
    conn.query(`SELECT u.id, u.name, u.username, f.user_id, f.following FROM users u JOIN follows f on u.id = f.following where user_id = ${id} AND f.status = "A"`, (err, data) => {
      if (!err) {
        res.status(200).json({ success: true, data, amount: data.length });
      } else {
        res.status(400).json({ success: false, emssage: 'Erro interno' });
      }
    });
  }

  async show(req, res) {
    const { id } = req.loggedUser;
    console.log(id);
    conn.query(`SELECT u.id, u.name, u.username, f.user_id, f.following FROM users u JOIN follows f on u.id = f.user_id where f.following = ${id} AND f.status = "A";`, (err, data) => {
      if (!err) {
        res.status(200).json({ success: true, data, amount: data.length });
      } else {
        res.status(400).json({ success: false, message: 'Erro interno' });
      }
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await Follow.update({
        status: 'D',
      }, {
        where: {
          following: id,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: 'Erro interno' });
    }
  }
}

export default new FollowController();
