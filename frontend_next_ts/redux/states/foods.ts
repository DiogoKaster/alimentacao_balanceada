import { createSlice } from "@reduxjs/toolkit"

type FoodsState = {
    carbs: string[],
    prots: string[],
    fats: string[]
}

const initialState: FoodsState = {
    carbs: [],
    prots: [],
    fats: []
}

export const foodsSlice = createSlice({
    name: 'foods',
    initialState,
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