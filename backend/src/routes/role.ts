import { Router } from 'express';
import { User } from '../models/User';
import { authMiddleware, adminMiddleware } from '../middleware/auth';

const router = Router();

router.post('/assign-role', authMiddleware, adminMiddleware, async (req, res) => {
  const { userId, role } = req.body;

  await User.findByIdAndUpdate(userId, { role });
  res.json({ message: 'Role updated successfully' });
});

export default router;
