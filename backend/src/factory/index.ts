import UserRepository from '../repositories/user.repository';
import UserService from '../services/user.service';
import UserController from '../controllers/user.controller';
import BarberRepository from '../repositories/barber.repository';
import BarberService from '../services/barber.service';
import BarberController from '../controllers/barber.controller';
import ScheduledAppointmentController from '../controllers/scheduledAppointment.controller';
import ScheduledAppointmentRepository from '../repositories/scheduledAppointment.repository';
import ScheduledAppointmentService from '../services/scheduledAppointment.service';
import SpecialtyController from '../controllers/specialty.controller';
import SpecialtyRepository from '../repositories/specialty.repository';
import SpecialtyService from '../services/specialty.service';

export const UserFactory = () => {
  const repository = new UserRepository();
  const service = new UserService(repository);
  const controller = new UserController(service);

  return controller;
};

export const BarberFactory = () => {
  const repository = new BarberRepository();
  const service = new BarberService(repository);
  const controller = new BarberController(service);

  return controller;
};

export const ScheduledAppointmentFactory = () => {
  const repository = new ScheduledAppointmentRepository();
  const service = new ScheduledAppointmentService(repository);
  const controller = new ScheduledAppointmentController(service);

  return controller;
};

export const SpecialtyFactory = () => {
  const repository = new SpecialtyRepository();
  const service = new SpecialtyService(repository);
  const controller = new SpecialtyController(service);

  return controller;
};
