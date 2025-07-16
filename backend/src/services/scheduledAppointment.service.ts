import {
  IScheduledAppointment,
  IScheduledAppointmentModel,
  IScheduledAppointmentService,
} from '../interfaces/IScheduledAppointment';

export default class ScheduledAppointmentService implements IScheduledAppointmentService {
  constructor(private repository: IScheduledAppointmentModel) {
    this.repository = repository;
  }

  async getScheduledBarbers(): Promise<IScheduledAppointment[] | null> {
    const find = await this.repository.getScheduledBarbers();
    return find;
  }

  async deleteScheduled(id: string): Promise<unknown> {
    const del = await this.repository.deleteScheduled(id);
    return del;
  }

  async getScheduledCustomerByUserId(user_id: string): Promise<IScheduledAppointment[] | null> {
    const find = await this.repository.getScheduledCustomerByUserId(user_id);
    return find;
  }

  async getScheduledBarberByBarberId(barber_id: string): Promise<IScheduledAppointment[] | null> {
    const find = await this.repository.getScheduledBarberByBarberId(barber_id);
    return find;
  }

  async createScheduledAppointment(
    data: IScheduledAppointment
  ): Promise<IScheduledAppointment | null> {
    const createScheduled = await this.repository.create(data);
    return createScheduled;
  }
}
