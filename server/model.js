import { Pool } from 'pg';
import path from 'path';

// importing the .env file in order to use the connection URI
import dotenv from 'dotenv'
dotenv.config({ path: path.resolve(__dirname, './.env') })

const PG_URI = process.env.PG_URI

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

// The database is a To-Do list for a user to keep track of their daily tasks.

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    // log the query being executed for debugging purposes
    console.log('executed query', text);
    // execute the query using the connection pool and return the result
    return pool.query(text, params, callback);
  }
};
