import mongoose, { Schema } from 'mongoose';
import { TOrder } from './orders/order.interface';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      ref: 'Product',
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export const OrderModel = mongoose.model('Order', orderSchema);
