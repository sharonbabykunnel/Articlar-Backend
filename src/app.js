import express from 'express'
import cors from 'cors'
import authRoutes from './features/auth/auth.routes.js'
import homeRoutes from './features/home/home.routes.js'
import profileRoutes from './features/profile/profile.routes.js'
import  './config/db.js'

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(`/api/auth`, authRoutes);
app.use(`/api/home/`, homeRoutes);
app.use(`/api/profile/`, profileRoutes);

export default app;