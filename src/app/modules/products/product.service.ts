// product.service.ts
import { Product } from '../product.model';
import { TProduct } from './product.interface';

export const ProductServices = {
  createProduct: async (productData: TProduct) => {
    const product = new Product(productData);
    return await product.save();
  },
  getALLProducts: async () => {
    return await Product.find({});
  },
  getProductById: async (productId: string) => {
    return await Product.findById(productId);
  },
  updateProductById: async (productId: string, quantity: number) => {
    return await Product.findByIdAndUpdate(
      productId,
      { 'inventory.quantity': quantity },
      { new: true },
    );
  },
  deleteProductById: async (productId: string) => {
    return await Product.findByIdAndDelete(productId);
  },
  searchProducts: async (searchTerm: string) => {
    return await Product.find({ $text: { $search: searchTerm } });
  },
};
