import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import { IUserToken } from '../interfaces/IUser';

export const SECRET = 'jwt_secret';
export const algorithm = 'HS256';

function generateJWT(payload: Omit<IUserToken, 'password'>) {
  const secret = process.env.JWT_SECRET || SECRET;
  const jwtConfig: object = {
    algorithm,
    expiresIn: '1h',
  };
  return jwt.sign({ payload }, secret, jwtConfig);
}

export default generateJWT;
