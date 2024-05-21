import { Schema, model } from 'mongoose';
import { TInventory, TProduct, TVariant } from './products/product.interface';

const variantSchema = new Schema<TVariant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: [String],
  variants: [variantSchema], // Embedding the Variant schema
  inventory: {
    type: inventorySchema,
    required: true,
  },
});

export const Product = model<TProduct>('Product', productSchema);
