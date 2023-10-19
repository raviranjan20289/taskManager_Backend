const express = require('express');

const router = express.Router();

const tasksController = require('../controllers/tasks');

router.get('/',  tasksController.getTask);

router.post('/post', tasksController.PostTask);

router.get('/singleTask/:id' , tasksController.getSingleTask);

router.patch('/updateTask/:id', tasksController.updateTask);

router.delete('/deleteTask/:id', tasksController.deleteTask);

module.exports= router;