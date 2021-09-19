import { create } from "zustand"

const useStore = create((set, get) => ({
  assets: [],
  getAssets: () => {},
  selectedCategory: "Vitals",
  setSelectedCategory: categoryName => {
    set({ selectedCategory: categoryName })
  },
  policies: [],
  getPolicies: () => {},
  quote: [],
  getQuotes: () => {},
}))

export default useStore
