import { Router } from 'express';
import { todoController } from '../controllers/todoController.js';

const router = Router();

router.get('/', todoController.getAll)
router.post('/', todoController.create)

export default router;