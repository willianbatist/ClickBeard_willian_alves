import { ISpecialty, ISpecialtyModel, ISpecialtyService } from '../interfaces/ISpecialty';

export default class SpecialtyService implements ISpecialtyService {
  private specialtyModel: ISpecialtyModel;

  constructor(specialtyModel: ISpecialtyModel) {
    this.specialtyModel = specialtyModel;
  }

  async createSpecialty(data: ISpecialty): Promise<ISpecialty | null> {
    return this.specialtyModel.createSpecialty(data);
  }

  async getSpecialtyById(id: string): Promise<ISpecialty | null> {
    return this.specialtyModel.getSpecialtyById(id);
  }

  async deleteSpecialty(id: string): Promise<unknown> {
    return this.specialtyModel.deleteSpecialty(id);
  }
}
