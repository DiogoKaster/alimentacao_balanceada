import { createSlice } from "@reduxjs/toolkit"

export const animationSlice = createSlice({
    name: 'animation',
    initialState: {
        animationFrameIdx: 0,
    },
    reducers: {
        callNextAnimationFrame: (state) => {
            state.animationFrameIdx = state.animationFrameIdx + 1
        },
    }
})

export const { callNextAnimationFrame } = animationSlice.actions

export default animationSlice.reducer