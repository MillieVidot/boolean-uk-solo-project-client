import create from "zustand"

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
    console.log("newUser", get().newUser)
  },

  addNewUser: () => {
    console.log("newUser post fetch", get().newUser)
    fetch("http://localhost:3030/users", {
      method: "POST",
      // credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...get().newUser }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error
        }
      })
      .then(res => set({ currentUser: res }))
      .then(res => console.log("current (new) user RES:", res))
      .then(console.log("current (new) user:", get().currentUser))
      .then(get().clearNewUser())
      .catch(error => {
        throw error
      })
  },
  logIn: userInput => {
    console.log("login function store", userInput)
    fetch("http://localhost:3030/users/user/login", {
      method: "POST",
      // credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ userInput }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error
        }
      })
      .then(res => set({ currentUser: res }))
      .then(res => console.log("current user login RES:", res))
      .then(console.log("current login user:", get().currentUser))
  },
}))

export default useStore
