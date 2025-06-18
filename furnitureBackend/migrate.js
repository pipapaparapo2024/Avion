import mongoose from 'mongoose';
import Furniture from './src/models/Furniture.js';
import { readFile } from 'fs/promises';
import dotenv from 'dotenv';

dotenv.config(); 

// Загрузка данных из JSON-файла
const data = JSON.parse(await readFile('./furnitureData.js', 'utf-8'));

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI);

// Функция для переноса данных
async function migrate() {
  try {
    await Furniture.deleteMany(); // Очистка коллекции
    await Furniture.insertMany(data); // Вставка данных
    console.log('✅ Данные успешно перенесены в MongoDB!');
  } catch (err) {
    console.error('❌ Ошибка миграции:', err);
  } finally {
    await mongoose.disconnect();
  }
}

migrate();