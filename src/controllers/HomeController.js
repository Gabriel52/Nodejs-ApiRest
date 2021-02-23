import User from '../models/User';
import Photo from '../models/Photo';

class HomeController {
  async show(req, res) {
    const { id } = req.loggedUser;

    try {
      const userShow = await User.findOne({ where: { id } });
      const photoShow = await Photo.findOne({ where: { user_id: id } });

      res.status(200).json({ success: true, user: userShow, avatar: photoShow });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: 'Erro interno' });
    }
  }
}

export default new HomeController();
