import express from 'express';
import path from 'path';

const PORT = 3000;
const app = express();

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
