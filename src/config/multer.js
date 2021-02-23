import multer from 'multer';
import { extname, resolve } from 'path';

const random = Math.floor(Math.random() * (20 - 1)) + 1;

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo encaminhado precisa ser uma imagem'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random}${extname(file.originalname)}`);
    },

  }),
};
