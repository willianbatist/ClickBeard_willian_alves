import { PrismaClient } from '@prisma/client';
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

  async getSpecialtyById(id: string): Promise<ISpecialty | null> {
    const specialty = await prisma.specialty.findUnique({
      where: { id },
    });

    return specialty as ISpecialty | null;
  }

  async deleteSpecialty(id: string): Promise<unknown> {
    const del = await prisma.specialty.delete({ where: { id } });
    return del;
  }
}
