import { Router } from 'express';
import { UserFactory } from '../factory';
import { validateCreateUser, validateLogin } from '../middleware/user.middleware';

const userRouter = Router();

userRouter.post('/sign-up', validateCreateUser, (req, res, next) => {
  UserFactory().create(req, res, next);
});

userRouter.post('/login', validateLogin, (req, res, next) => {
  UserFactory().login(req, res, next);
});

export default userRouter;
