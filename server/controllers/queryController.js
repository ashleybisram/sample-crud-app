// This file includes all SQL queries as our custom middleware functions.

import db from '../model';

const controller = {};

// CREATE

controller.createToDoItem = async (req, res, next) => {
    
    // Store the client's request to have access to the form input
    const payload = req.body;
    console.log('This is the user request payload', payload);

    try {

        const sqlQuery = `INSERT INTO todos (user_id, task, is_complete)
                          VALUES($1, $2, FALSE)`
        const values = [payload.user_id, payload.task]

        const createdItem = await db.query(sqlQuery, values)

        res.locals.newItem = createdItem;

    } catch {

        console.error('Error in createToDoItem middleware:', err);
        // return the error object
        return next({
          log: 'createToDoItem: ERROR: ' + err.message,
          message: { err: 'Error occurred while adding a new To Do Item. Check server log for additional details'}
        });

    }

    next();
}

// READ

controller.getAllToDoItems = async (req, res, next) => {
   
    // The query would be edited if we had Multiple Authenticated Users
    try {

         const sqlQuery = `SELECT *
         FROM todos
         WHERE user_id = 'b6ee6ea1-056b-47c9-8fd7-7e562bbca7b4'`;

         const allItems = await db.query(sqlQuery);

         res.locals.items = allItems;

    } catch {

            console.error('Error in getAllToDoItems middleware:', err);
            // return the error object
            return next({
              log: 'getAllToDoItems: ERROR: ' + err.message,
              message: { err: 'Error occurred while reading all existing To Do Items. Check server log for additional details'}
            });

    }
    
    next();

}

// UPDATE

controller.updateCompletion = async (req, res, next) => {
    
    const taskID = [req.query.id];
    console.log('This is the Task ID that is being updated', taskID);

    try {

        const sqlQuery = `UPDATE todos
                        SET is_complete = TRUE
                        WHERE id = $1`;
        const updatedCompletion = await db.query(sqlQuery, taskID);

        res.locals.update = updatedCompletion;

    } catch {

           console.error('Error in updateCompletion middleware:', err);
           // return the error object
           return next({
             log: 'updateCompletion: ERROR: ' + err.message,
             message: { err: 'Error occurred while updating completion status of To Do Item. Check server log for additional details'}
           });

   }

   next();

}

// DELETE

controller.deleteToDoItem = async (req, res, next) => {
    
    const taskID = [req.query.id];
    console.log('This is the Task ID that is being deleted', taskID);

    try {
        const sqlQuery = `DELETE FROM todos
                          WHERE id = $1`;
        const deletedItem = await db.query(sqlQuery, taskID)
        
        res.locals.deletedItem = deletedItem;

    } catch {
           console.error('Error in deleteToDoItem middleware:', err);
           // return the error object
           return next({
             log: 'deleteToDoItem: ERROR: ' + err.message,
             message: { err: 'Error occurred while deleting a To Do Item. Check server log for additional details'}
           });
   }

   next();

}

export default controller;