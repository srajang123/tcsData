const Pool = require('pg').Pool;
const pool = new Pool({
    uer: 'srajan',
    host: 'localhost',
    database: 'tcstask1',
    port: 5432,
    password:'postgres'
});
module.exports=pool;