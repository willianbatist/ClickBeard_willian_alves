import { NextFunction, Request, Response } from 'express';
import { IBarberService } from '../interfaces/IBarber';

export default class BarberController {
  constructor(private service: IBarberService) {
    this.service = service;
  }

  async deleteBarber(req: Request, res: Response, _next: NextFunction) {
    try {
      const { id } = req.params;
      const del = await this.service.deleteBarber(id);
      return res.status(201).json(del);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async getBarberById(req: Request, res: Response, _next: NextFunction) {
    try {
      const { id } = req.params;
      const find = await this.service.getBarberById(id);
      return res.status(200).json(find);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async getBarbers(req: Request, res: Response, _next: NextFunction) {
    try {
      const find = await this.service.getBarbers();
      return res.status(200).json(find);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async createBarber(req: Request, res: Response, _next: NextFunction) {
    try {
      const create = await this.service.createBarber(req.body);
      return res.status(201).json(create);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
