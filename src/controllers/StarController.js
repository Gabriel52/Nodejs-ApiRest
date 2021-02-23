import Star from '../models/Star';
import Repository from '../models/Repository';

import conn from '../config/rawDatabase';

class StarController {
  async store(req, res) {
    const user_id = req.loggedUser.id;
    const { repository_id } = req.body;

    const repositoryStore = await Repository.findOne({ where: { id: repository_id } });

    await Star.create({
      user_id,
      repository_id,
      status: 'A',
    });

    res.status(201).json({ success: true, message: `Você acabou de dar estrela no repositorio ${repositoryStore.name}` });
  }

  async index(req, res) {
    const { repository } = req.body;
    conn.query(`
    select u.name, u.username, s.user_id, s.repository_id, s.status, r.name from users u
    join stars s on u.id = s.user_id
    join repositories r on r.id = s.repository_id where repository_id = ${repository} and s.status = 'A'
    order by u.name;
    `, (err, data) => {
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
      await Star.update({
        status: 'D',
      }, {
        where: {
          id,
        },
      });
      res.status(200).json({ success: true, message: 'Excluido com sucesso' });
    } catch (error) {
      console.log(error);
      res.statsu(400).json({ success: false, message: 'Erro interno' });
    }
  }
}

export default new StarController();
