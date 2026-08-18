import { create } from "zustand";

interface ProductUIStore {
  searchTerm: string;
  selectedCategory: string | null;
  setSearchTerm: (term: string) => void;
  setCategory: (cat: string | null) => void;
}

export const useProductUIStore = create<ProductUIStore>((set) => ({
  searchTerm: '',
  selectedCategory: null,
  setSearchTerm: (term) => set({ searchTerm: term }),
  setCategory: (cat) => set({ selectedCategory: cat }),
}));