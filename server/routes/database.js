// This file handles CRUD functionality with custom middleware imported from the controller.
import express from 'express'

import controller from '../controllers/queryController';

import router from express.Router();

// CREATE
router.post('/add', 
    controller.createToDoItem, 
    (req, res, next) => {
        res.status(201).json(res.locals.newItem)
    }
)

// READ
router.get('/all', 
    controller.getAllToDoItems, 
    (req, res, next) => {
        res.status(200).json(res.locals.items);
    }
)

// UPDATE
router.post('/update/:id', 
    controller.updateCompletion, 
    (req, res, next) => {
        res.status(200).json(res.locals.update);
    }
)

// DELETE
router.delete('/delete/:id', 
    controller.deleteToDoItem, 
    (req, res, next) => {
        res.status(200).json(res.locals.deletedItem)
    }
)

export default router;