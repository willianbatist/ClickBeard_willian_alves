export interface IBarberSpecialty {
  barberId: string;
  specialtyId: string;
}

export interface IBarberSpecialtyModel {
  createBarberSpecialty(data: IBarberSpecialty): Promise<IBarberSpecialty | null>;
  getBarberSpecialty(data: IBarberSpecialty): Promise<IBarberSpecialty | null>;
  deleteBarberSpecialty(data: IBarberSpecialty): Promise<unknown>;
}

export interface IBarberSpecialtyService {
  createBarberSpecialty(data: IBarberSpecialty): Promise<IBarberSpecialty | null>;
  deleteBarberSpecialty(data: IBarberSpecialty): Promise<unknown>;
}
