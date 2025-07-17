import { NextFunction, Request, Response } from 'express';
import { ISpecialtyService } from '../interfaces/ISpecialty';

export default class SpecialtyController {
  constructor(private service: ISpecialtyService) {
    this.service = service;
  }

  async createSpecialty(req: Request, res: Response, _next: NextFunction) {
    try {
      const create = await this.service.createSpecialty(req.body);
      return res.status(201).json(create);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getSpecialties(req: Request, res: Response, _next: NextFunction) {
    try {
      const specialties = await this.service.getSpecialties();
      return res.status(200).json(specialties);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  // async getSpecialtyById(req: Request, res: Response, _next: NextFunction) {
  //   try {
  //     const { id } = req.params;
  //     const specialty = await this.service.getSpecialtyById(id);
  //     return res.status(200).json(specialty);
  //   } catch (error: any) {
  //     return res.status(400).json({ error: error.message });
  //   }
  // }

  async deleteSpecialty(req: Request, res: Response, _next: NextFunction) {
    try {
      const { id } = req.params;
      const del = await this.service.deleteSpecialty(id);
      return res.status(200).json(del);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
