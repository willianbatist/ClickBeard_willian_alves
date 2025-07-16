import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.user.create({
      data: {
        name: 'Admin',
        email: 'admin@clickbeard.com',
        password: '$2b$10$CvcXUhcSdkZiNtAm0IgnM.iCwK2RGVt72lWJKba/ihiVbItcPhXue',
        role: 'admin',
      },
    });

    const barbersData = [
      {
        name: 'Rogério Ceni',
        age: 51,
        specialties: ['corte de tesoura', 'barba'],
      },
      {
        name: 'Tele Santana',
        age: 35,
        specialties: ['corte de tesoura', 'barba'],
      },
      {
        name: 'Jonathan Calleri',
        age: 30,
        specialties: ['corte degrade', 'sobrancelha'],
      },
      {
        name: 'Rodrigo Nestor',
        age: 23,
        specialties: ['corte degrade', 'tratamento capilar'],
      },
    ];

    for (const barber of barbersData) {
      const createdBarber = await prisma.barber.create({
        data: {
          name: barber.name,
          age: barber.age,
          dateHire: new Date(),
          specialties: {
            create: barber.specialties.map((specialtyName) => ({
              specialty: {
                connectOrCreate: {
                  where: { name: specialtyName },
                  create: { name: specialtyName },
                },
              },
            })),
          },
        },
      });

      console.log(`✅ Barbeiro criado: ${createdBarber.name}`);
    }
  } catch (error) {
    console.error('❌ Erro ao rodar a seed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
