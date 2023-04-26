import { Pool, ResultSetHeader } from 'mysql2/promise';
import UserInterface from '../interfaces/user.interface';

class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createUser(addUser: UserInterface): Promise<UserInterface> {
    const { username, vocation, level, password } = addUser;

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const getId = result[0].insertId;

    return { id: getId, ...addUser };
  }
}

export default UserModel;