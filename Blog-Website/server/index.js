import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Components
import Connection from './database/db.js';
import Router from './routes/route.js';

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', Router);

// Connect to Database
Connection();

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running successfully on PORT ${PORT}`);
});
