import create from "zustand"

const BASE_URL = process.env.REACT_APP_API_URL

const useStore = create((set, get) => ({
  currentUser: {
    firstName: "",
    lastName: "",
    citizenId: "",
  },
  setCurrentUser: newUserData => {
    set({ currentUser: newUserData })
  },
  assets: [],
  getAssets: () => {
    fetch(`${BASE_URL}/assets`)
      .then(res => res.json())
      .then(allAssets => set({ assets: allAssets }))
  },
  getAssetsByCategory: category => {
    fetch(`${BASE_URL}/assets/${category}`)
      .then(res => res.json())
      .then(filteredAssets => set({ assets: filteredAssets }))
  },
  selectedCategory: "Vitals",
  setSelectedCategory: categoryName => {
    set({ selectedCategory: categoryName })
  },
  packages: [],
  getPackages: () => {
    fetch(`${BASE_URL}/packages`)
      .then(res => res.json())
      .then(allPackages => set({ packages: allPackages }))
  },

  policies: [],
  getPoliciesForUser: () => {
    fetch(`${BASE_URL}/users/user/policies`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(get().currentUser.citizenId),
    })
      .then(res => console.log(res))
      .then(res => res.json())
      .then(allPolicies => set({ policies: allPolicies }))
  },
  purchasePolicy: () => {
    console.log("cartItemsIds", get().cartItemsIds)
    let assets = []
    let packages = []
    get().cartItemsIds.forEach(item => {
      if (item.packageCat) {
        packages.push({ packageId: item.id })
      } else {
        assets.push({ assetId: item.id })
      }
    })
    const policyToAdd = {
      currentUserId: get().currentUser.id,
      lastName: get().currentUser.lastName,
      assetsIds: assets,
      packagesIds: packages,
      cost: get().cartTotal,
    }

    fetch(`${BASE_URL}/policies`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(policyToAdd),
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error
        }
        get().clearCartItemsIds()
        return res
      })
      .then(res => console.log("addedpolicy 72", res))
      .then(res => get().policies.unshift(res))
    // .then(get().clearCartItemsIds())
  },

  // FORM STUFF

  newUser: {
    citizenId: "",
    firstName: "",
    lastName: "",
    password: "",
  },
  clearNewUser: () => {
    set({
      newUser: {
        citizenId: "",
        firstName: "",
        lastName: "",
        password: "",
      },
    })
  },
  handleNewUserChange: input => e => {
    set({ newUser: { ...get().newUser, [input]: e.target.value } })
  },

  addNewUser: () => {
    console.log("newUser post fetch", get().newUser)
    fetch(`${BASE_URL}/users`, {
      method: "POST",
      // credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(get().newUser),
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error
        }
        return res
      })
      .then(res => set({ currentUser: res }))
      .then(get().clearNewUser())
  },
  logIn: userInput => {
    console.log("user to log in data", userInput)
    fetch(`${BASE_URL}/users/user/login`, {
      method: "POST",
      // credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userInput),
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error
        }
        return res
      })
      .then(res => set({ currentUser: res }))
      .then(console.log("current loggedin user:", get().currentUser))
  },
  cartItemsIds: [],
  clearCartItemsIds: () => {
    set({ cartItemsIds: [] })
    get().refreshCartItems()
  },
  addToCart: (id, packageCat) => {
    set({ cartItemsIds: [...get().cartItemsIds, { id, packageCat }] })
  },
  cartItems: [],
  cartTotal: 0,
  setCartTotal: total => {
    set({ cartTotal: get().cartTotal + total })
  },
  refreshCartItems: () => {
    set({ cartItems: [], cartTotal: 0 })
  },
  setCartItems: item => {
    set({ cartItems: [...get().cartItems, item] })
    get().setCartTotal(item.cost)
    console.log(get().cartItems)
  },
}))

export default useStore
