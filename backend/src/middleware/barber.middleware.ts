import { z } from 'zod';
import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

interface CustomRequest extends Request {
  payload?: jwt.JwtPayload;
}

const requestBodySchema = z.object({
  name: z.string(),
  age: z.number(),
  dateHire: z.string(),
});

export async function validateRoleAdm(req: CustomRequest, res: Response, next: NextFunction) {
  try {
    const data = req.payload;
    if (data?.payload.role !== 'admin') {
      return res.status(400).json({ message: 'access denied' });
    }
    next();
  } catch (error) {
    res.status(400).json({ message: 'invalid data', error });
  }
}

export async function validateCreateBarber(req: Request, res: Response, next: NextFunction) {
  try {
    requestBodySchema.parse(req.body);
    next();
  } catch (error: any) {
    return res.status(400).json({ message: error.issues[0].path[0] });
  }
}
