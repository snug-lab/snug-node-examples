'use strict';

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.MYSQLHOST,
        user: process.env.MYSQLUSER,
        password: process.env.MYSQLPWD,
        database: process.env.MYSQLDB,
        charset: 'utf8'
    }
});

module.exports = require('bookshelf')(knex);
