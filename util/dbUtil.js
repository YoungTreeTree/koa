var mysql = require('mysql');
var pool  = mysql.createPool({
    /*host     : config.database.HOST,
    user     : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASE*/
    host     : 'localhost',
    user     : 'root',
    password : 'yq911916',
    database : 'test'
});

let query = function( sql, values ) {

    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject( err )
            } else {
                connection.query(sql, values, ( err, rows) => {
                    console.log(`sql : ${sql} , values : [ ${values} ]`);
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    })

};

exports.query = query;
