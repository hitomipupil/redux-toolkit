import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
    name: "cake",
    initialState: {
        numOfCakes: 20
    },
    reducers: {
        buyCake: (state, action) => {
            state.numOfCakes -= action.payload;
        },
        addCake: (state, action) => {
            state.numOfCakes += action.payload;
        }
    }
});

export const { buyCake, addCake } = cakeSlice.actions;
export default cakeSlice.reducer;
