import { ILogin, IUser, IUserModel, IUserService } from '../interfaces/IUser';
import bcrypt from 'bcrypt';
import generateJWT from '../utils/generateJWT';

export default class UserService implements IUserService {
  constructor(private repository: IUserModel) {
    this.repository = repository;
  }

  async createUser(data: IUser): Promise<IUser | null> {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(data.password, salt);
    const createdUser = await this.repository.createUser({
      name: data.name,
      email: data.email,
      password: hashPassword,
      role: 'customer',
    });
    return createdUser;
  }

  async login(data: ILogin) {
    const user = await this.repository.getUserByEmail(data.email);
    const userData = {
      email: user?.email,
      password: user?.password,
      role: user?.role,
    };
    const token = generateJWT(userData);
    return { token, name: user?.name, email: user?.email, role: user?.role, id: user?.id };
  }
}
