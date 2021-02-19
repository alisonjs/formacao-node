const Sequelize = require("sequelize");
const dbinmemory = process.env.DB_IN_MEMORY;
const dbname = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;
var connection;
if(dbinmemory == 'true'){
  connection = new Sequelize('sqlite::memory');
}else{
  connection = new Sequelize(dbname, user, password, {
    host: host,
    dialect: dialect
  });
}

module.exports = connection;