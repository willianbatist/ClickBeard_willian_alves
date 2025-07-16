export interface ISpecialty {
  id: string;
  name: string;
}

export interface ISpecialtyModel {
  createSpecialty(data: ISpecialty): Promise<ISpecialty | null>;
  getSpecialtyById(id: string): Promise<ISpecialty | null>;
  deleteSpecialty(id: string): Promise<unknown>;
}

export interface ISpecialtyService {
  createSpecialty(data: ISpecialty): Promise<ISpecialty | null>;
  getSpecialtyById(id: string): Promise<ISpecialty | null>;
  deleteSpecialty(id: string): Promise<unknown>;
}
