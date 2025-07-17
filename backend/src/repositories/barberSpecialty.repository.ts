import {  PrismaClient } from '@prisma/client';
import { IBarberSpecialty, IBarberSpecialtyModel } from '../interfaces/IBarberSpecialty';

const prisma = new PrismaClient();

export default class BarberSpecialtyRepository implements IBarberSpecialtyModel {

  async createBarberSpecialty(data: IBarberSpecialty): Promise<IBarberSpecialty | null> {
    const { barberId, specialtyId } = data;

    const barberSpecialty = await prisma.barberSpecialty.create({
      data: {
        barber_id: barberId,
        specialty_id: specialtyId,
      },
    });

    return barberSpecialty as unknown as IBarberSpecialty;
  }

  async getBarberSpecialty(data: IBarberSpecialty): Promise<IBarberSpecialty | null> {
    const { barberId, specialtyId } = data;

    return prisma.barberSpecialty.findFirst({
      where: {
        barber_id: barberId,
        specialty_id: specialtyId,
      },
    }) as Promise<IBarberSpecialty | null>;
  }
  
  async deleteBarberSpecialty(data: IBarberSpecialty): Promise<unknown> {
    const { barberId, specialtyId } = data;

    return prisma.barberSpecialty.deleteMany({
      where: {
        barber_id: barberId,
        specialty_id: specialtyId,
      },
    });
  }

}