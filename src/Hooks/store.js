import create from "zustand"

const useStore = create((set, get) => ({
  currentUser: "user",
  setCurrentUser: (firstName, lastName) => {
    set({ currentUser: `${firstName} ${lastName}` })
  },
  assets: [],
  getAssets: () => {
    fetch("http://localhost:3030/assets")
      .then(res => res.json())
      .then(allAssets => set({ assets: allAssets }))
  },
  selectedCategory: "Vitals",
  setSelectedCategory: categoryName => {
    set({ selectedCategory: categoryName })
  },
  packages: [],
  getPackages: () => {
    fetch("http://localhost:3030/packages")
      .then(res => res.json())
      .then(allPackages => set({ packages: allPackages }))
  },
  policies: [],
  getPolicies: () => {
    fetch("http://localhost:3030/policies")
      .then(res => res.json())
      .then(allPolicies => set({ policies: allPolicies }))
  },
}))

export default useStore
