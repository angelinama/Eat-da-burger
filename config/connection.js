// Set up MySQL connection.
const mysql = require('mysql');

const connection = process.env.JAWSDB_URL? mysql.createConnection("mysql://xdj9qvu54tmf9e2z:jyw0li0dgagaop7n@jhdjjtqo9w5bzq2t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/izziao18bj4eluur"):
mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  // NOTE: Be sure to add your MySQL password here!
  password: 'flower34777',
  database: 'cat_db',
});

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
