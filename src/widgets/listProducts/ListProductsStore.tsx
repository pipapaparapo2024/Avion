import axios from "axios";
import { create } from "zustand";

export interface Dimensions {
  height: number;
  width: number;
  depth: number;
}

export interface Furniture {
  id: number;
  url: string;
  name: string;
  price: number;
  shortDescription: string;
  features?: string[];
  dimensions?: Dimensions;
  quantity: number;
  remaining?: number;
  designer: string;         
  productType: string;  
}

export type FurnitureState = {
  FurnitureContainer: Furniture[];
  getFurniture: () => void;
  updateFurnitureStock: (id: number, newRemaining: number) => void;
};

export const useFurnitureStore = create<FurnitureState>((set, get) => ({
  FurnitureContainer: [],

  getFurniture: () => {
    axios
      .get<Furniture[]>("https://67bc4e91ed4861e07b3a014b.mockapi.io/furniture") 
      .then((response) => {
        const newFurnitureList = response.data.map((item) => {
          // Ищем уже существующее состояние товара (если был ранее загружен)
          const existing = get().FurnitureContainer.find((f) => f.id === item.id);

          return {
            ...item,
            // Если `remaining` уже есть — сохраняем, иначе ставим `quantity`
            remaining: existing ? existing.remaining : item.quantity,
            // Добавляем значения по умолчанию, если их нет на сервере
            designer: item.designer || "Unknown Designer",
            productType: item.productType || "Furniture",
          };
        });

        set({ FurnitureContainer: newFurnitureList });
      })
      .catch((error) => {
        console.error("Failed to fetch furniture:", error);
        throw new Error("Failed to fetch furniture");
      });
  },

  updateFurnitureStock: (id: number, newRemaining: number) => {
    set((state) => ({
      FurnitureContainer: state.FurnitureContainer.map((item) =>
        item.id === id
          ? { ...item, remaining: Math.max(0, newRemaining) }
          : item
      ),
    }));
  },
}));