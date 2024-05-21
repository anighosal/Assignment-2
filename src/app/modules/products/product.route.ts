import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/', ProductControllers.createProduct);
router.get('/', ProductControllers.getALLProducts);
router.get('/:productId', ProductControllers.getProductById);

export const ProductRoutes = router;