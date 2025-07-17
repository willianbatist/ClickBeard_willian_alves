import { IBarberSpecialty, IBarberSpecialtyModel, IBarberSpecialtyService } from "../interfaces/IBarberSpecialty";

export default class BarberSpecialtyService implements IBarberSpecialtyService {
  private barberSpecialtyModel: IBarberSpecialtyModel;

  constructor(barberSpecialtyModel: IBarberSpecialtyModel) {
    this.barberSpecialtyModel = barberSpecialtyModel;
  }

  async createBarberSpecialty(data: IBarberSpecialty): Promise<IBarberSpecialty | null> {
    const existingSpecialty = await this.barberSpecialtyModel.getBarberSpecialty(data);
    
    if (existingSpecialty) {
      throw new Error('Barber specialty already exists');
    }

    return this.barberSpecialtyModel.createBarberSpecialty(data);
  }

  async deleteBarberSpecialty(data: IBarberSpecialty): Promise<unknown> {
    return this.barberSpecialtyModel.deleteBarberSpecialty(data);
  }
}