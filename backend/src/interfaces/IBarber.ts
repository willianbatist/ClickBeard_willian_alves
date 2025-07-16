import { ISpecialty } from './ISpecialty';

export interface IBarber {
  id?: string;
  name: string;
  age: number;
  dateHire: Date;
  specialties: IBarberSpecialty[];
  created_at?: Date;
  updated_at?: Date;
}

export interface IBarberSpecialty {
  specialty: ISpecialty;
}

export interface IBarberModel {
  create(data: IBarber): Promise<IBarber | null>;
  getBarbers(): Promise<IBarber[] | []>;
  getBarberById(id: string): Promise<IBarber | null>;
  deleteBarber(id: string): Promise<unknown>;
}

export interface IBarberService {
  createBarber(data: IBarber): Promise<IBarber | null>;
  getBarbers(): Promise<IBarber[] | []>;
  getBarberById(id: string): Promise<IBarber | null>;
  deleteBarber(id: string): Promise<unknown>;
}
