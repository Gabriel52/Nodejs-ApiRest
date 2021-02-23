import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

function adminAuth(req, res, next) {
  const autoToken = req.headers.authorization;

  if (autoToken !== undefined) {
    const bearer = autoToken.split(' ');
    const token = bearer[1];

    jwt.verify(token, process.env.JWT_SECRET, (error, data) => {
      if (error) {
        res.statusCode = 401;
        res.json({ error: 'Token invalido' });
      } else {
        req.token = token;
        req.loggedUser = { id: data.id };
        next();
      }
    });
  } else {
    res.statusCode = 401;
    res.json({ error: 'Token invalido' });
  }
}

module.exports = adminAuth;
