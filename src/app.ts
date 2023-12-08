import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';

// For env File
dotenv.config();

//import userRoutes from './routes/userRoutes';
//import campingRoutes from './routes/campingRoutes';

const app = express();

app.use(express.json());
app.use(cors());

//app.use('/api/users', userRoutes);
//app.use('/api/camping_areas', campingRoutes); 

export default app;