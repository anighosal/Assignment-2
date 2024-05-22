// product.controller.ts
import { Request, Response } from 'express';
import { TProduct } from './product.interface';
import { ProductServices } from './product.service';
import {
  createProductSchema,
  searchProductsSchema,
  updateProductSchema,
} from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData: TProduct = createProductSchema.parse(req.body);
    const result = await ProductServices.createProduct(productData);
    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Validation error',
      error: (err as Error).message,
    });
  }
};

const getALLProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getALLProducts();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving the products',
      error: (err as Error).message,
    });
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
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving the product',
      error: (err as Error).message,
    });
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { quantity } = updateProductSchema.parse(req.body);
    const result = await ProductServices.updateProductById(productId, quantity);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Validation error',
      error: (err as Error).message,
    });
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductById(productId);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while deleting the product',
      error: (err as Error).message,
    });
  }
};

const searchProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = searchProductsSchema.parse(req.query);
    const result = await ProductServices.searchProducts(searchTerm as string);
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Validation error',
      error: (err as Error).message,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getALLProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  searchProducts,
};
