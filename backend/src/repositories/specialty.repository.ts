import { Prisma, PrismaClient } from '@prisma/client';
import { ISpecialty, ISpecialtyModel } from '../interfaces/ISpecialty';

const prisma = new PrismaClient();

export default class SpecialtyRepository implements ISpecialtyModel {
  async createSpecialty(data: ISpecialty): Promise<ISpecialty | null> {
    const { name } = data;

    const specialty = await prisma.specialty.create({
      data: { name },
    });

    return specialty as ISpecialty;
  }

  async getSpecialties(): Promise<ISpecialty[]> {
    const specialties = await prisma.specialty.findMany();
    return specialties as ISpecialty[];
  }

  async getSpecialtyByName(name: string): Promise<ISpecialty | null> {
    const specialty = await prisma.specialty.findFirst({
      where: {
        name: name,
      },
    });

    return specialty as ISpecialty | null;
  }

  async getSpecialtyById(id: string): Promise<ISpecialty | null> {
    const specialty = await prisma.specialty.findUnique({
      where: { id },
    });

    return specialty as ISpecialty | null;
  }

  async deleteSpecialty(id: string): Promise<unknown> {
    await prisma.barberSpecialty.deleteMany({
      where: { specialty_id: id },
    });
    const del = await prisma.specialty.delete({ where: { id } });
    return del;
  }
}
