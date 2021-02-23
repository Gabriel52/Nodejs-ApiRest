import slugfy from 'slugify';

import Repository from '../models/Repository';
import User from '../models/User';

class RepositoryController {
  async store(req, res) {
    const { name, description, _public } = req.body;
    const user_id = req.loggedUser.id;
    const storeUser = await User.findOne({ where: { id: user_id } });
    const name_user = storeUser.name;

    const slug_repository = slugfy(name);
    const slug_user = slugfy(name_user);

    const slug = `${slug_user}-${slug_repository}`;

    try {
      await Repository.create({
        name,
        description,
        public: _public,
        user_id,
        status: 'A',
        slug,
      });
      res.status(201).json({ success: true, message: `${name} criado com sucesso` });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: 'Erro interno' });
    }
  }

  async index(req, res) {
    const user_id = req.loggedUser.id;
    try {
      const repositoryIndex = await Repository.findAll({
        raw: true,
        where: { status: 'A', user_id },
      });
      const amount = repositoryIndex.length;
      res.status(200).json({ success: false, data: repositoryIndex, amount });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: 'Erro interno' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await Repository.update({
        status: 'D',
      }, {
        where: { id },
      });
      res.status(200).json({ success: true, message: 'Excluido com sucesso' });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: 'Erro interno' });
    }
  }
}

export default new RepositoryController();
