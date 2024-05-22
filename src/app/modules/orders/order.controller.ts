import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const result = await OrderServices.createOrder(orderData);
    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the order',
      error: err.message,
    });
  }
};

export const OrderControllers = {
  createOrder,
};
