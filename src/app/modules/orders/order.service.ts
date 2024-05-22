import { OrderModel } from '../order.model';
import { TOrder } from './order.interface';

const createOrder = async (payload: TOrder) => {
  const result = await OrderModel.create(payload);
  return result;
};

export const OrderServices = {
  createOrder,
};
