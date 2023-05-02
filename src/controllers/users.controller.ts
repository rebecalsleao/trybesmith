import { Request, Response } from 'express';
import UserService from '../services/users.services';
import statusCodes from '../utils/statusCode';

class UserController {
  private userService: UserService = new UserService();

  constructor() {
    this.createUser = this.createUser.bind(this);
  }

  async createUser(req: Request, res: Response): Promise<void> {    
    const user = req.body;

    const token = await this.userService.createUser(user);

    res.status(statusCodes.CREATED).json({ token });
  }
}

export default UserController;