import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/', OrderControllers.createOrder);
router.get('/', OrderControllers.getALLOrders);
router.get('/', OrderControllers.getOrdersByEmail);

export const OrderRoutes = router;
