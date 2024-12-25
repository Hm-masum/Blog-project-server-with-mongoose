import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
import notFound from './app/middleWares/notFound';
import globalErrorHandler from './app/middleWares/globalErrorHandler';
import { BlogRoutes } from './app/modules/blog/blog.route';

// parser
app.use(express.json());
app.use(cors());

app.use('/api/auth', UserRoutes);
app.use('/api/blogs', BlogRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'server live',
  });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
