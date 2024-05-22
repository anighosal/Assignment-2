import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { OrderRoutes } from './app/modules/orders/order.route';
import { ProductRoutes } from './app/modules/products/product.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors({ origin: ['http://localhost:5000'] }));

// application routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
