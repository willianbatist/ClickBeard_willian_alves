import { Router } from 'express';
import { ScheduledAppointmentFactory } from '../factory';
import validateJWT from '../middleware/validateJWT';
import { validateCreateScheduledAppointment } from '../middleware/scheduledAppointment.middleware';

const ScheduledAppointmentRouter = Router();

ScheduledAppointmentRouter.post(
  '/scheduledAppointment',
  validateJWT,
  validateCreateScheduledAppointment,
  (req, res, next) => {
    ScheduledAppointmentFactory().create(req, res, next);
  }
);

ScheduledAppointmentRouter.get('/scheduledAppointment/:id', validateJWT, (req, res, next) => {
  ScheduledAppointmentFactory().getScheduledBarberByBarberId(req, res, next);
});

ScheduledAppointmentRouter.get(
  '/scheduledAppointment/customer/:id',
  validateJWT,
  (req, res, next) => {
    ScheduledAppointmentFactory().getScheduledCustomerByUserId(req, res, next);
  }
);

ScheduledAppointmentRouter.delete(
  '/scheduledAppointment/customer/delete/:id',
  validateJWT,
  (req, res, next) => {
    ScheduledAppointmentFactory().deleteScheduled(req, res, next);
  }
);

ScheduledAppointmentRouter.get('/scheduledAppointment', validateJWT, (req, res, next) => {
  ScheduledAppointmentFactory().getScheduledBarbers(req, res, next);
});

export default ScheduledAppointmentRouter;
