import { Router } from 'express';

import productsRouter from './products.route';
import userRouter from './users.route';

const router = Router();

router.use(productsRouter);
router.use(userRouter);

export default router;