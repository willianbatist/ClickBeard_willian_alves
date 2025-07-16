import { NextFunction, Request, Response } from 'express';
import { IUserService } from '../interfaces/IUser';

export default class UserController {
  constructor(private service: IUserService) {
    this.service = service;
  }

  async create(req: Request, res: Response, _next: NextFunction) {
    try {
      const createUser = await this.service.createUser(req.body);
      return res.status(201).json(createUser);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async login(req: Request, res: Response, _next: NextFunction) {
    try {
      const user = await this.service.login(req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
