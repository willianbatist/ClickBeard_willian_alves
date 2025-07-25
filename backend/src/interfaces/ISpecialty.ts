export interface ISpecialty {
  id: string;
  name: string;
}

export interface ISpecialtyModel {
  createSpecialty(data: ISpecialty): Promise<ISpecialty | null>;
  getSpecialties(): Promise<ISpecialty[]>;
  getSpecialtyByName(name: string): Promise<ISpecialty | null>;
  getSpecialtyById(id: string): Promise<ISpecialty | null>;
  deleteSpecialty(id: string): Promise<unknown>;
}

export interface ISpecialtyService {
  createSpecialty(data: ISpecialty): Promise<ISpecialty | null>;
  getSpecialties(): Promise<ISpecialty[]>;
  getSpecialtyById(id: string): Promise<ISpecialty | null>;
  deleteSpecialty(id: string): Promise<unknown>;
}
