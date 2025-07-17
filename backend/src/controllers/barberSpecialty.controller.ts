import { NextFunction, Request, Response } from 'express';
import { IBarberSpecialtyService } from '../interfaces/IBarberSpecialty';

export default class BarberSpecialtyController {
  constructor(private service: IBarberSpecialtyService) {
    this.service = service;
  }

  async createBarberSpecialty(req: Request, res: Response, _next: NextFunction) {
    try {
      const { barberId } = req.params;
      const create = await this.service.createBarberSpecialty({ barberId, specialtyId: req.body.specialtyId });
      return res.status(201).json(create);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async deleteBarberSpecialty(req: Request, res: Response, _next: NextFunction) {
    try {
      const { barberId, specialtyId } = req.params;
      const del = await this.service.deleteBarberSpecialty({ barberId, specialtyId });
      return res.status(200).json(del);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}