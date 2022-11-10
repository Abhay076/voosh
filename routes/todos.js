const express = require('express');
const router = express.Router();
const todoController = require('../app/api/controllers/todos');
router.get('/get-order', todoController.getAll);
router.post('/add-order', todoController.create);
router.get('/:todoId', todoController.getById);
router.put('/:todoId', todoController.updateById);
router.delete('/:todoId', todoController.deleteById);
module.exports = router;