import Furniture from '../models/Furniture.js';

export const getAllFurniture = async (req, res, next) => {
  try {
    const furniture = await Furniture.find();
    res.json(furniture);
  } catch (error) {
    next(error);
  }
};

export const getFurnitureById = async (req, res, next) => {
  try {
    const furniture = await Furniture.findById(req.params.id);
    if (!furniture) {
      return res.status(404).json({ message: 'Furniture not found' });
    }
    res.json(furniture);
  } catch (error) {
    next(error);
  }
};

export const updateFurnitureStock = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { remaining } = req.body;

    const furniture = await Furniture.findByIdAndUpdate(
      id,
      { remaining },
      { new: true }
    );

    if (!furniture) {
      return res.status(404).json({ message: 'Furniture not found' });
    }

    res.json(furniture);
  } catch (error) {
    next(error);
  }
};