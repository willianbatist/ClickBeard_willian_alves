import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes';
import barberRouter from './routes/barber.routes';
import ScheduledAppointmentRouter from './routes/scheduledAppointment.routes';
import specialtyRouter from './routes/specialty.routes';
import barberSpecialtyRouter from './routes/barberSpecialty.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(barberRouter);
app.use(ScheduledAppointmentRouter);
app.use(specialtyRouter);
app.use(barberSpecialtyRouter);

export default app;
