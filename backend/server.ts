import express from 'express'
import userController from './controllers/userController'
import mongoose from 'mongoose'

const app = express();
const CONNECTION_STRING = "mongodb://localhost:27017/prueba-tecnica-crud"

mongoose.connect(CONNECTION_STRING)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Connection error', error));

app.get(`/api/users`, userController.findAll);

app.get(`/api/user/:id`, userController.findOne);

app.post(`/api/user`, userController.create);

app.put(`/api/user/:id`, userController.update);

app.delete(`/api/user/:id`, userController.delete);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
})