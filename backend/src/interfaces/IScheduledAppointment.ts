export interface IScheduledAppointment {
  id?: string;
  date: Date;
  user_id: string;
  barber_id: string;
}

export interface IScheduledData {
  user_id: string;
  barber_id: string;
}

export interface IScheduledAppointmentModel {
  create(data: IScheduledAppointment): Promise<IScheduledAppointment | null>;
  getScheduledBarberByBarberId(id: string): Promise<IScheduledAppointment[] | null>;
  getScheduledCustomerByUserId(id: string): Promise<IScheduledAppointment[] | null>;
  deleteScheduled(id: string): Promise<unknown>;
  getScheduledBarbers(): Promise<IScheduledAppointment[] | null>;
}

export interface IScheduledAppointmentService {
  createScheduledAppointment(data: IScheduledAppointment): Promise<IScheduledAppointment | null>;
  getScheduledBarberByBarberId(id: string): Promise<IScheduledAppointment[] | null>;
  getScheduledCustomerByUserId(id: string): Promise<IScheduledAppointment[] | null>;
  deleteScheduled(id: string): Promise<unknown>;
  getScheduledBarbers(): Promise<IScheduledAppointment[] | null>;
}
