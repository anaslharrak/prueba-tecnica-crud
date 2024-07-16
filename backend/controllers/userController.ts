import { Request, Response } from 'express';
import User from '../schemas/userSchema';
import mongoose from 'mongoose';
class userController {

    // GET /api/users
    async findAll(req: Request, res: Response) {
        User.find()
            .then((users) => {
                res.status(200).json({ users });
            })
            .catch((error) => {
                res.status(500).json({error: error.message})});
    }
    
    // GET /api/user
    async findOne(req: Request, res: Response) {
       User.findById(req.params.id)
            .then((user) => {
                if(user === null) return res.status(404).json({message: 'User not found'});
                res.status(200).json({ user });
            })
            .catch((error) => {
                if(error.kind === 'ObjectId') return res.status(404).json({message: 'User not found'});
                
                res.status(500).json({error: error.message})});
    }
    
    // POST /api/user
    async create(req: Request, res: Response) {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).send(user);
          } catch (error) {
            if (error instanceof mongoose.Error.ValidationError) {
              return res.status(400).json({ error: error.message });
            }
            console.error(error);
            res.status(500).send({ message: 'Internal Server Error' });
          }
    }
    
    // PUT /api/user
    async update(req: Request, res: Response) {
       User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true, context: 'query'})
            .then((user) => {
                res.status(200).json({message: 'User updated', user});
            })
            .catch((error) => {
                if(error.kind === 'ObjectId') return res.status(404).json({message: 'User not found'});
                res.status(500).json({error: error.message})});
    }
    
    // DELETE /api/user
    async delete(req: Request, res: Response) {
       User.findByIdAndDelete(req.params.id)
            .then((user) => {
                res.status(200).json({message: 'User deleted', user});
            })
            .catch((error) => {
                if(error.kind === 'ObjectId') return res.status(404).json({message: 'User not found'});
                res.status(500).json({error: error.message})});
    }
}


export default new userController();