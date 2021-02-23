require('dotenv').config();

const mysql = require('mysql');

const config = {
  host: process.env.MYSQL_DATABASE_HOST,
  user: process.env.MYSQL_DATABASE_USER,
  password: process.env.MYSQL_DATABASE_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  port: 3306,
};

const conn = mysql.createConnection(config);

module.exports = conn;
