import { Router } from 'express';

import OrderController from '../controllers/order.controller';

const router = Router();

router.get('/', OrderController.fetchAllOrders);
router.post('/', OrderController.addNewOrder);
router.get('/:id', OrderController.getASingleOrderById);

export default router;
