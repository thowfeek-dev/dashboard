import { Router } from 'express';
import { User } from '../models/User';
import { authMiddleware, adminMiddleware } from '../middleware/auth';

const router = Router();

router.get('/users', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

export default router;
