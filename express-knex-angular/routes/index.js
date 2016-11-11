'use strict';

const express = require('express');
const router = express.Router();

// Controllers
const todoController = require('./todos');

// Require routes
router.use('/api/todos', todoController);

module.exports = router;
