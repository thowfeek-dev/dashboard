import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth';
import roleRoutes from './routes/role';
import cors from 'cors';
import userRoutes from './routes/users';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/role', roleRoutes);
app.use('/api', userRoutes);

mongoose.connect('mongodb://0.0.0.0:27017/dashboard', {
}).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('Database connection error:', err);
});