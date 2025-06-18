import mongoose from 'mongoose';

const dimensionsSchema = new mongoose.Schema({
  height: { type: Number, required: true },
  width: { type: Number, required: true },
  depth: { type: Number, required: true }
});

const furnitureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  shortDescription: { type: String, required: true },
  features: [{ type: String }],
  dimensions: dimensionsSchema,
  quantity: { type: Number, required: true },
  remaining: { type: Number, required: true },
  designer: { type: String, required: true },
  productType: { type: String, required: true },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Furniture', furnitureSchema);