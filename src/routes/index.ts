import { Router } from 'express';

import productsRouter from './products.route';
import userRouter from './users.route';
import orderRouter from './orders.route';

const router = Router();

router.use(productsRouter);
router.use(userRouter);
router.use(orderRouter);

export default router;
