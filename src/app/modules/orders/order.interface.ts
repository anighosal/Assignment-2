export type TOrder = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
  name?: string;
  inventory?: {
    quantity: number;
    inStock: boolean;
  };
};
