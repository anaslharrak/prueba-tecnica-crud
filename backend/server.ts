import express from 'express'
import userController from './controllers/userController'

const app = express();

app.get(`/api/users`, userController.findAll);

app.get(`/api/user`, userController.findOne);

app.post(`/api/user`, userController.create);

app.put(`/api/user`, userController.update);

app.delete(`/api/user`, userController.delete);



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
})