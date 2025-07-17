import { Router } from 'express';
import { BarberFactory } from '../factory';
import validateJWT from '../middleware/validateJWT';
import { validateCreateBarber, validateRoleAdm } from '../middleware/barber.middleware';

const barberRouter = Router();

barberRouter.post(
  '/barber',
  validateJWT,
  validateRoleAdm,
  validateCreateBarber,
  (req, res, next) => {
    BarberFactory().createBarber(req, res, next);
  }
);

barberRouter.get('/barber', (req, res, next) => {
  BarberFactory().getBarbers(req, res, next);
});

barberRouter.get('/barber/:id', validateJWT, (req, res, next) => {
  BarberFactory().getBarberById(req, res, next);
});

barberRouter.delete('/barber/delete/:id', validateJWT, (req, res, next) => {
  BarberFactory().deleteBarber(req, res, next);
});

export default barberRouter;
