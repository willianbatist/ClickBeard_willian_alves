import { z } from 'zod';
import { NextFunction, Request, Response } from 'express';

const requestBodySchema = z.object({
  date: z.string(),
  user_id: z.string(),
  barber_id: z.string(),
});

export async function validateCreateScheduledAppointment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    requestBodySchema.parse(req.body);
    next();
  } catch (error: any) {
    return res.status(400).json({ message: error.issues[0].path[0] });
  }
}
