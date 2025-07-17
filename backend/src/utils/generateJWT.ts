import * as jwt from 'jsonwebtoken';
import { IUserToken } from '../interfaces/IUser';
import dotenv from 'dotenv';

dotenv.config();

export const algorithm = 'HS256';

function generateJWT(payload: Omit<IUserToken, 'password'>) {
  const secret = process.env.JWT_SECRET as string;

  const jwtConfig: object = {
    algorithm,
    expiresIn: process.env.EXPIRATION_TIME as string,
  };

  return jwt.sign({ payload }, secret, jwtConfig);
}

export default generateJWT;
