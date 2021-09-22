import create from "zustand"

const useFormStore = create((set, get) => ({
  newUser: {
    citizenId: "",
    firstName: "",
    lastName: "",
    password: "",
  },
  setNewUser: () => {
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
    get().setNewUser()
    console.log("newUser post fetch", get().newUser)
  },

  newQuote: {
    step: 1,
    citizenId: "",
    firstName: "",
    lastName: "",
    password: "",
  },
  addQuote: () => {},
}))

export default useFormStore

//   handleChange: input => e => {
//     set({ [input]: e.target.value })
//   },
