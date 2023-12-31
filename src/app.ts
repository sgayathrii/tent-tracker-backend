import express, { Request, Response, Application } from 'express';
import cors from "cors";
import dotenv from 'dotenv';

// For env File
dotenv.config();

import userRoutes from './routes/userRoutes';
import campingRoutes from './routes/campingRoutes';
import bookCampRoutes from './routes/bookCampRoutes';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

app.use('/api/users', userRoutes);
app.use('/api/camping-areas', campingRoutes);
app.use('/api/book-camp', bookCampRoutes); 

export default app;