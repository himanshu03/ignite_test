/**
 * Created by hverma on 6/21/2016.
 */

function ConnectDatabase (){
    var sql = require('../node_modules/oracledb');

    this.connection = sql.createConnection({
        host : 'omsdb_qa_basic.neustar.biz',
        user : 'basic_qa',
        password : 'basic_qa123',
        database: 'CH DATABASE'
    });
}
module.exports = ConnectDatabase;
