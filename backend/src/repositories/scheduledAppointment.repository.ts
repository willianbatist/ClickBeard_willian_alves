import { PrismaClient } from '@prisma/client';
import {
  IScheduledAppointment,
  IScheduledAppointmentModel,
} from '../interfaces/IScheduledAppointment';

const prisma = new PrismaClient();

export default class ScheduledAppointmentRepository implements IScheduledAppointmentModel {
  async getScheduledBarbers(): Promise<IScheduledAppointment[] | null> {
    const find = await prisma.scheduledAppointment.findMany();
    return find;
  }

  async deleteScheduled(id: string): Promise<unknown> {
    const del = await prisma.scheduledAppointment.delete({ where: { id } });
    return del;
  }
  async getScheduledCustomerByUserId(user_id: string): Promise<IScheduledAppointment[] | null> {
    const find = await prisma.scheduledAppointment.findMany({
      where: { user_id },
    });
    return find;
  }
  async getScheduledBarberByBarberId(barber_id: string) {
    const find = await prisma.scheduledAppointment.findMany({
      where: { barber_id },
    });
    return find;
  }

  async create(data: IScheduledAppointment): Promise<IScheduledAppointment | null> {
    const scheduled = await prisma.scheduledAppointment.create({ data });
    return scheduled;
  }
}
