import express, { Application, Request, Response } from "express";
import notFound from "./app/middlewares/notFound";
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.routes';
import { BlogRoutes } from './app/modules/blog/blog.routes';
const app: Application = express();

// Parser
app.use(express.json());
app.use(express.text());
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'SnapVerse Server Live 🌐',
  });
});

// Application Routes
app.use('/api/auth', UserRoutes);
app.use('/api/blogs', BlogRoutes);
// Global Middleware
app.use(notFound);

export default app;
