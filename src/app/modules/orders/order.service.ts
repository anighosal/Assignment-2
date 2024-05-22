import { Order } from '../order.model';
import { TOrder } from './order.interface';

const createOrder = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};
const getALLOrders = async () => {
  const result = await Order.find();
  return result;
};

const getOrdersByEmail = async (email: string) => {
  const result = await Order.find({ email });
  return result;
};

const getProductByName = async (productName: string) => {
  const product = await Order.findOne({ name: productName });
  return product;
};

const getProductById = async (productId: string) => {
  const product = await Order.findById(productId);
  return product;
};

const updateProductInventory = async (
  productId: string,
  quantity: number,
  inStock: boolean,
) => {
  const updatedProduct = await Order.findByIdAndUpdate(
    productId,
    {
      $set: {
        'inventory.quantity': quantity,
        'inventory.inStock': inStock,
      },
    },
    { new: true },
  );
  return updatedProduct;
};

export const OrderServices = {
  createOrder,
  getALLOrders,
  getOrdersByEmail,
  getProductByName,
  getProductById,
  updateProductInventory,
};
