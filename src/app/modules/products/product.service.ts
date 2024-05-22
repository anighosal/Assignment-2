import { Product } from '../product.model';
import { TProduct } from './product.interface';

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
const getALLProducts = async () => {
  const result = await Product.find();
  return result;
};
const getProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductById = async (productId: string, quantity: number) => {
  const product = await Product.findById(productId);
  if (!product) {
    return null;
  }
  product.inventory.quantity = quantity;
  product.inventory.inStock = quantity > 0;
  const result = await product.save();
  return result;
};

const deleteProductById = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

const searchProducts = async (searchTerm: string) => {
  const result = await Product.find({
    name: { $regex: searchTerm, $options: 'i' },
  });
  return result;
};

export const ProductServices = {
  createProduct,
  getALLProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  searchProducts,
};
