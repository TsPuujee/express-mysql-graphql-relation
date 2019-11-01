var mysql = require('mysql')
const dotenv = require('dotenv');
dotenv.config();
var connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    port     : process.env.MYSQL_PORT,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASS,
    database : process.env.MYSQL_DB_NAME
});

connection.connect(function(err) {
    if (err) throw err;
    else console.log('ok')
});
connection.on('error', function(err) {
    console.log("[mysql error]",err);
});
module.exports = connection