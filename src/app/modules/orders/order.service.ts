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

export const OrderServices = {
  createOrder,
  getALLOrders,
  getOrdersByEmail,
};
