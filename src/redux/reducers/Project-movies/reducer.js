import { MOVIES } from "./creator";
const state_default = [
   
]

export const movieReducer = (state = state_default,action) => {
    console.log("🚀 ~ file: reducer.js:10 ~ movieReducer ~ action:", action)
    switch (action.type) {
        case "pushArray":
            state = action.payload
            console.log("🚀 ~ file: reducer.js:14 ~ movieReducer ~ state:", state)
            return [...state]
        default:
            return [...state]
    }
    // return {state}
}
