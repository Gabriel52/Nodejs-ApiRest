import multer from 'multer';
import multerConfig from '../config/multer';
import Photo from '../models/Photo';

const upload = multer(multerConfig).single('file');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        res.status(400).json({ success: false, erro: error.code });
      }
      const { originalname, filename } = req.file;
      const { user_id } = req.body;
      try {
        await Photo.create({
          originalname,
          filename,
          user_id,
        });
        res.status(201).json({
          success: true, message: 'Foto salva com sucesso', file: req.file,
        });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, erro: 'É necessário passar um id valido' });
      }
    });
  }
}

export default new PhotoController();
