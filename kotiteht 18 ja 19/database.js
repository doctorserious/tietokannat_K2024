const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'test_user2',
  password: 'salasana',
  database: 'test_db2'
});
module.exports = connection;