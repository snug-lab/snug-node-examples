'use strict';

const express = require('express');
const router = express.Router();

// import model
const Todo = require('../models/Todo');

// function to get all todos
function getTodos(req, res) {
    Todo.fetchAll()
        .then(function(model) {
            res.json(model);
        })
        .catch(function(err) {
            res.send(err);
        });
}

// get all todos
router.get('/', function(req, res) {
    return getTodos(req, res);
});

// create todo and send back all todos after creation
router.post('/', function(req, res) {

    // create a todo, information comes from AJAX request from Angular
    Todo.forge({
            text: req.body.text
        })
        .save()
        .then(function(model) {
            return getTodos(req, res);
        })
        .catch(function(err) {
            res.send(err);
        });
});

// delete a todo
router.delete('/:todo_id', function(req, res) {
    new Todo({
            id: req.params.todo_id
        })
        .destroy()
        .then(function(model) {
            return getTodos(req, res);
        })
        .catch(function(err) {
            res.send(err);
        });
});

module.exports = router;
