function ConnectDatabase () {
    var mysql = require('../node_modules/mysql');

    this.connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database: 'Testing'
    });

};
module.exports = ConnectDatabase;