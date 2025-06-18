import express from 'express';
import {
  getAllFurniture,
  getFurnitureById,
  updateFurnitureStock
} from '../controllers/FurnitureController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Публичные маршруты
router.get('/', getAllFurniture);
router.get('/:id', getFurnitureById);

// Защищенные маршруты (требуют аутентификации)
router.patch('/:id/stock', authMiddleware, updateFurnitureStock);

export default router;