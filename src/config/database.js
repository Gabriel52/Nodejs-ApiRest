require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.MYSQL_DATABASE_HOST,
  port: 3306,
  username: process.env.MYSQL_DATABASE_USER,
  password: process.env.MYSQL_DATABASE_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: '-03:00',
  },
  timezone: '-03:00',
};
