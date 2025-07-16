import { PrismaClient } from '@prisma/client';
import { IBarber, IBarberModel } from '../interfaces/IBarber';

const prisma = new PrismaClient();

export default class BarberRepository implements IBarberModel {
  async deleteBarber(id: string): Promise<unknown> {
    await prisma.scheduledAppointment.deleteMany({ where: { barber_id: id } });
    const del = await prisma.barber.delete({ where: { id } });
    return del;
  }

  async getBarberById(id: string): Promise<IBarber | null> {
    const find = await prisma.barber.findUnique({
      where: { id },
      include: {
        specialties: {
          select: {
            specialty: true,
          },
        },
      },
    });
    return find as IBarber | null;
  }

  async getBarbers(): Promise<IBarber[]> {
    const find = await prisma.barber.findMany({
      include: {
        specialties: {
          select: {
            specialty: true,
          },
        },
      },
    });
    return find as IBarber[];
  }

  async create(data: IBarber): Promise<IBarber> {
    const { name, age, dateHire, specialties } = data;

    const barber = await prisma.barber.create({
      data: {
        name,
        age,
        dateHire,
        specialties: {
          create: specialties.map((item) => ({
            specialty: {
              connect: { id: item.specialty.id },
            },
          })),
        },
      },
      include: {
        specialties: {
          include: { specialty: true },
        },
      },
    });

    return barber as IBarber;
  }
}
