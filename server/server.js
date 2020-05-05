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
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  database: process.env.DBNAME,
  password: process.env.DBPASSWORD
});

let customerData = [];
con.connect((err) => {
  if (err) throw err;
  let sql = 'select customerName, contactFirstName, contactLastName from customers order by customerName;'
  con.query(sql, function (err, rows) {
    if (err) throw err;

    rows.forEach(row => {
      customerData.push({
        customerName: row.customerName,
        contactFirstName: row.contactFirstName,
        contactLastName: row.contactLastName,
      });
    });

    con.end((err) => {
      if (err) throw err;
    });
  });
  
});

/* Customer endpoint. Returns a list of customers */
app.get('/customers', (req, res) => {
  res.send(customerData);
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

const server = app.listen(port, () => {console.log(`Listening on port ${port}`)});

module.exports = server;