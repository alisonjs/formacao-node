const Sequelize = require("sequelize");

const dbname = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;

const connection = new Sequelize(dbname, user, password, {
  host: host,
  dialect: dialect
});

module.exports = connection;