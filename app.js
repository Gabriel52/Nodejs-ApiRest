// all packages
import express from 'express';

// All routes
import userRoutes from './src/routes/userRoutes';
import photoRoutes from './src/routes/photoRoutes';
import loginRoutes from './src/routes/loginRoutes';
import followRoutes from './src/routes/followRoutes';
import repositoryRoutes from './src/routes/repositoryRoutes';
import starRoutes from './src/routes/starRoutes';
import homeRoutes from './src/routes/homeRoutes';

// connection database
import './src/database';
import conn from './src/config/rawDatabase';

conn.connect(
  (err) => {
    if (err) {
      console.log('!!! Cannot connect !!! Error:');
      throw err;
    } else {
      console.log('CONNECTION ESTABLISHED.');
    }
  },
);
class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static('../uploads'));
  }

  routes() {
    this.app.use('/api/v1', userRoutes);
    this.app.use('/api/v1', photoRoutes);
    this.app.use('/api/v1', loginRoutes);
    this.app.use('/api/v1', followRoutes);
    this.app.use('/api/v1', repositoryRoutes);
    this.app.use('/api/v1', starRoutes);
    this.app.use('/api/v1', homeRoutes);
  }
}

export default new App().app;
