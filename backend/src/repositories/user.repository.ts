import { PrismaClient } from '@prisma/client';
import { IUser, IUserModel } from '../interfaces/IUser';

const prisma = new PrismaClient();

export default class UserRepository implements IUserModel {
  async getUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  async createUser(data: IUser) {
    const createdUser = await prisma.user.create({ data });
    return createdUser;
  }
}
