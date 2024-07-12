import { Request, Response } from 'express';
import User from '../schemas/userSchema';
import { Error } from 'mongoose';
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
            const user = await User.create(req.body);
            res.status(201).json({ message: 'User created', user });
        } catch (error) {
            const typedError = error as Error;
            res.status(500).json({ error: typedError.message });
        }
    }
    
    // PUT /api/user
    async update(req: Request, res: Response) {
       User.findByIdAndUpdate(req.params.id, req.body, {new: true})
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