const { Client, Pool } = require("pg");


// Opción 1 Client**************************************
// const cliente = new Client({
//     user: 'postgres',
//     password: 'postgres',
//     port: 5432,
//     database: 'dvdrental',
//     host: 'localhost'
// });

// cliente.connect();

// cliente.query("SELECT * FROM actor LIMIT 10", (err, result) => {
//     console.table(result.rows);
//     cliente.end();
// })
// Fin Opción 1 Client**********************************

// Opción 2 Pool**************************************
const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    port: 5432,
    host: 'localhost',
    database: 'dvdrental',
    idleTimeoutMillis: 3_000
});


pool.query("SELECT * FROM actor LIMIT 10", (err, result) => {
    if(err) {
        return console.log(err.message);
    }
    console.log({ err });
    console.table(result.rows);
})