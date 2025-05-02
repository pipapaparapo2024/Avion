import axios from "axios";
import { create } from "zustand";

interface Dimensions {
  height: number;
  width: number;
  depth: number;
}

interface Furniture {
  id: number; 
  url: string; 
  name: string;
  price: number;
  shortDescription: string; 
  features: string[]; 
  dimensions: Dimensions;
  quantity: number;
}

export type FurnitureState = {
  FurnitureContainer: Furniture[];
  getFurniture: () => void;
};

export const useFurnitureStore = create<FurnitureState>((set) => ({
  FurnitureContainer: [], 
  getFurniture: () => {
    axios
      .get<Furniture[]>("https://67bc4e91ed4861e07b3a014b.mockapi.io/furniture")
      .then((response) => {
        set({ FurnitureContainer: response.data });
      })
      .catch((error) => {
        console.error("Failed to fetch furniture:", error);
        throw new Error("Failed to fetch furniture");
      });
  }
  ,
}));

