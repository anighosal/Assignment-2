import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const result = await ProductServices.createProduct(productData);
    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getALLProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getALLProducts();
    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getProductById(productId);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Product retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving the product',
      error: err.message,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getALLProducts,
  getProductById,
};