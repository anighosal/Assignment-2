export type TVariant = {
  type: string;
  value: string;
};

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description?: string | undefined;
  price: number;
  category: string;
  tags?: string[] | undefined;
  variants?: TVariant[];
  inventory: TInventory;
};
