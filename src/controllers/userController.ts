import { Request, Response, NextFunction } from 'express';
import UserService from '../services/userService';

const userController = {
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email } = req.body;

      if (!email) {
        return res.status(500).json({ error: 'Email is required' });
      }

      const user = await UserService.createUser(name, email);

      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  },

  getUserById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = parseInt(req.params.userId, 10);

      if (isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid userId' });
      }

      const user = await UserService.getUserById(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json({ name: user.name });
    } catch (error) {
      next(error);
    }
  },
};

export default userController;
