import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
import notFound from './app/middleWares/notFound';
import globalErrorHandler from './app/middleWares/globalErrorHandler';

// parser
app.use(express.json());
app.use(cors());

app.use('/api', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'server live',
  });
});

app.use(notFound);
app.use(globalErrorHandler);

export default app;
