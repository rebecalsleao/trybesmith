import UserModel from '../models/users.model';
import UserInterface from '../interfaces/user.interface';
import connection from '../models/connection';
import TokenService from './token.services';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async createUser(user: UserInterface): Promise<string> {
    const addUser = await this.model.createUser(user);

    const token = TokenService.generateToken(addUser.id.toString());

    return token;
  }
}

export default UserService;
