// product.validation.ts
import { z } from 'zod';

export const variantSchema = z.object({
  type: z.string().min(1, 'Variant type is required'),
  value: z.string().min(1, 'Variant value is required'),
});

export const inventorySchema = z.object({
  quantity: z
    .number()
    .int()
    .nonnegative('Quantity must be a non-negative integer'),
  inStock: z.boolean(),
});

export const createProductSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().optional(),
  price: z.number().positive('Price must be a positive number'),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()).optional(),
  variants: z.array(variantSchema).optional(),
  inventory: inventorySchema,
});

export const updateProductSchema = z.object({
  quantity: z
    .number()
    .int()
    .nonnegative('Quantity must be a non-negative integer'),
});

export const searchProductsSchema = z.object({
  searchTerm: z.string().min(1, 'Search term is required'),
});
