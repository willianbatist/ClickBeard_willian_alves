import { Router } from 'express';
import { SpecialtyFactory } from '../factory';
import validateJWT from '../middleware/validateJWT';

const specialtyRouter = Router();

specialtyRouter.post('/specialty', validateJWT,(req, res, next) => {
  SpecialtyFactory().createSpecialty(req, res, next);
});

specialtyRouter.get('/specialties', (req, res, next) => {
  SpecialtyFactory().getSpecialties(req, res, next);
});

// specialtyRouter.get('/specialty/:id', validateJWT, (req, res, next) => {
//   SpecialtyFactory().getSpecialtyById(req, res, next);
// });

specialtyRouter.delete('/specialty/:id', validateJWT, (req, res, next) => {
  SpecialtyFactory().deleteSpecialty(req, res, next);
});

export default specialtyRouter;
