import { IBarber, IBarberModel, IBarberService } from '../interfaces/IBarber';

export default class BarberService implements IBarberService {
  constructor(private repository: IBarberModel) {
    this.repository = repository;
  }

  async deleteBarber(id: string): Promise<unknown> {
    const del = await this.repository.deleteBarber(id);
    return del;
  }

  async getBarberById(id: string): Promise<IBarber | null> {
    const find = await this.repository.getBarberById(id);
    return find;
  }

  async getBarbers(): Promise<[] | IBarber[]> {
    const find = await this.repository.getBarbers();
    return find;
  }

  async createBarber(data: IBarber) {
    const barber = await this.repository.create(data);
    return barber;
  }
}
