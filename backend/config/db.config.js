require('dotenv').config();

const {
  DB_HOST: host,
  DB_NAME: database,
  DB_USERNAME: username,
  DB_PASSWORD: password
} = process.env;

module.exports = 
  {
    HOST: host ?? 'localhost',
    USER: username ?? 'user',
    NAME: database ?? 'db',
    DB: password ?? 'password',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
      acquire: 60000
    },
    typeValidation: true,
    logging: false
  };