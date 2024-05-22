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

const getALLOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getALLOrders();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required in query parameters',
      });
    }

    const result = await OrderServices.getOrdersByEmail(email);
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully for user email!',
      data: result,
    });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching orders by email',
      error: err.message,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getALLOrders,
  getOrdersByEmail,
};
