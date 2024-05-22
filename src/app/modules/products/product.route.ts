import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/', ProductControllers.createProduct);
router.get('/', ProductControllers.getALLProducts);
router.get('/:productId', ProductControllers.getProductById);
router.put('/:productId/inventory', ProductControllers.updateProductById);
router.delete('/:productId', ProductControllers.deleteProductById);
router.get('/search', ProductControllers.searchProducts);

export const ProductRoutes = router;
