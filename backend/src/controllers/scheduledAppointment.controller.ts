import { IScheduledAppointmentService } from '../interfaces/IScheduledAppointment';
import { NextFunction, Request, Response } from 'express';

export default class ScheduledAppointmentController {
  constructor(private service: IScheduledAppointmentService) {
    this.service = service;
  }

  async getScheduledBarbers(req: Request, res: Response, _next: NextFunction) {
    try {
      const find = await this.service.getScheduledBarbers();
      return res.status(200).json(find);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async deleteScheduled(req: Request, res: Response, _next: NextFunction) {
    try {
      const { id } = req.params;
      const del = await this.service.deleteScheduled(id);
      return res.status(200).json(del);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async getScheduledCustomerByUserId(req: Request, res: Response, _next: NextFunction) {
    try {
      const { id } = req.params;
      const find = await this.service.getScheduledCustomerByUserId(id);
      return res.status(200).json(find);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async getScheduledBarberByBarberId(req: Request, res: Response, _next: NextFunction) {
    try {
      const { id } = req.params;
      const find = await this.service.getScheduledBarberByBarberId(id);
      return res.status(200).json(find);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async create(req: Request, res: Response, _next: NextFunction) {
    try {
      const scheduled = await this.service.createScheduledAppointment(req.body);
      return res.status(201).json(scheduled);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
