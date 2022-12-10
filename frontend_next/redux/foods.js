import { createSlice } from "@reduxjs/toolkit"

export const foodsSlice = createSlice({
    name: 'foods',
    initialState: {
        carbs: [],
        prots: [],
        fats: [],
    },
    reducers: {
        setCarbs: (state, action) => {
            state.carbs = action.payload
        },
        setProts: (state, action) => {
            state.prots = action.payload
        },
        setFats: (state, action) => {
            state.fats = action.payload
        }
    }
})

export const { setCarbs, setProts, setFats } = foodsSlice.actions

export default foodsSlice.reducer