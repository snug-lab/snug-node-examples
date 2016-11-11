'use strict';

const bookshelf = require('../config/bookshelf');

const Todo = bookshelf.Model.extend({
    tableName: 'Todo'
});

module.exports = Todo;
