import express from 'express'
import path from 'path'
import cors from 'cors'
import authRoutes from './features/auth/auth.routes.js'
import homeRoutes from './features/home/home.routes.js'
import profileRoutes from './features/profile/profile.routes.js'
import  './config/db.js'

const app = express();

const corsOptions = {
  origin: '*',
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};
const __dirname = path.resolve();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/test', (req, res) => {
  res.send('hi')
})
app.use(`/api/auth`, authRoutes);
app.use(`/api/home/`, homeRoutes);
app.use(`/api/profile/`, profileRoutes);
app.use(express.static(path.join(__dirname, './../frontend', 'dist')))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname,'./../frontend','dist','index.html'))
})

export default app;