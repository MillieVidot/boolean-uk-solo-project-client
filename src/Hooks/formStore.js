// import create from "zustand"

// const useFormStore = create((set, get) => ({
//   newUser: {
//     citizenId: "",
//     firstName: "",
//     lastName: "",
//     password: "",
//   },
//   setNewUser: () => {
//     set({
//       newUser: {
//         citizenId: "",
//         firstName: "",
//         lastName: "",
//         password: "",
//       },
//     })
//   },
//   handleNewUserChange: input => e => {
//     set({ newUser: { ...get().newUser, [input]: e.target.value } })
//     console.log("newUser", get().newUser)
//   },

//   addNewUser: () => {
//     console.log("newUser post fetch", get().newUser)

//     fetch("http://localhost:3030/users", {
//       method: "POST",
//       body: get().newUser,
//     })
//       .then(res => res.json())
//       .then(
//         get().setNewUser({
//           newUser: {
//             citizenId: "",
//             firstName: "",
//             lastName: "",
//             password: "",
//           },
//         })
//       )
//   },

//   newQuote: {
//     step: 1,
//     citizenId: "",
//     firstName: "",
//     lastName: "",
//     password: "",
//   },
//   addQuote: () => {},
// }))

// export default useStore

//   handleChange: input => e => {
//     set({ [input]: e.target.value })
//   },
