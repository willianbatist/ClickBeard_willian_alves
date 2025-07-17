import { Router } from 'express';
import { BarberSpecialtyFactory } from '../factory';
import validateJWT from '../middleware/validateJWT';

const barberSpecialtyRouter = Router();

barberSpecialtyRouter.post('/barber/:barberId/specialty', validateJWT, (req, res, next) => {
  BarberSpecialtyFactory().createBarberSpecialty(req, res, next);
});

barberSpecialtyRouter.delete('/barber/:barberId/specialty/:specialtyId', validateJWT, (req, res, next) => {
  BarberSpecialtyFactory().deleteBarberSpecialty(req, res, next);
});

export default barberSpecialtyRouter;