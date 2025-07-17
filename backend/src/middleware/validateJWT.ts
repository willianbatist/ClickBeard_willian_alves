import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface CustomRequest extends Request {
  payload?: jwt.JwtPayload;
}

const validateJWT = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization as string;
    const JWT: string = process.env.JWT_SECRET as string;
    const payload = jwt.verify(token, JWT) as jwt.JwtPayload;
    req.payload = payload;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validateJWT;
