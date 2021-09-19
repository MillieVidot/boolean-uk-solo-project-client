import { create } from "zustand"

const useStore = create((set, get) => ({
  assets: [],
  getAssets: () => {},
  policies: [],
  getPolicies: () => {},
  quote: [],
  getQuotes: () => {},
}))
