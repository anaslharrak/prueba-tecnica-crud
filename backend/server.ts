import express from 'express'
import userController from './controllers/userController'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

export const app = express(); //Export the app for testing purposes
app.use(express.json());
app.use(cors()); //Enable CORS to all requests in order to allow the frontend to access the API and to avoid CORS errors
dotenv.config(); //Load the environment variables from the .env file

const {PORT, NODE_ENV} = process.env;

const MONGODB_URI = NODE_ENV === 'test' ? process.env.MONGODB_URI_TEST : process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI!)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Connection error', error));

app.get('/api/users', userController.findAll);

app.get('/api/user/:id', userController.findOne);

app.post('/api/user', userController.create);

app.put('/api/user/:id', userController.update);

app.delete('/api/user/:id', userController.delete);

export const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
