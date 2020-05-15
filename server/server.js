const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;
const path = require('path');
const mysql = require('mysql');

app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));

/* Connect to db and retrieve customer data */
const con = mysql.createConnection({
  host: '66.198.240.24',//process.env.DBHOST,
  database: 'longklaw_hasura_db',//process.env.DBNAME,
  user: 'longklaw_hasuradb_user',//process.env.DBUSER,
  password: 'longklaw_hasuradb_user',//process.env.DBPASSWORD
});

con.connect();

/* Query the database. Takes a sql statement and a callback */
const queryDataBase = (sql, callback) => {
  con.query(sql, (err, rows) => {
    if (err) throw err;
    callback(rows);
  });
};

/* Customer endpoint. Returns a list of customers */
app.get('/customers', (req, res) => {
  const sql = 'select customerName, contactFirstName, contactLastName from customers order by customerName;';
  queryDataBase(sql, (rows) => {
    const data = [];
    rows.forEach((row) => {
      data.push({
        customerName: row.customerName,
        contactFirstName: row.contactFirstName,
        contactLastName: row.contactLastName,
      });
    });

    res.send(data);
  });
});

/* No matter the path to bundle.js, return the build bundle. */
app.get('*/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', '/bundle.js'));
});

/* No matter the path to bundle.js.map, return the build bundle. */
app.get('*/bundle.js.map', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', '/bundle.js.map'));
});

/* No matter the path to index.html, return the build bundle. */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', '/index.html'));
});

const server = app.listen(port, () => { console.log(`Listening on port ${port}`); });

module.exports = server;
