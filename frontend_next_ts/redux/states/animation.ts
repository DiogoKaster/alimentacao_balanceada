import { createSlice } from "@reduxjs/toolkit"

type AnimationState = { 
    animationFrameIdx: number
}

const initialState: AnimationState = {
    animationFrameIdx: 0,
}

export const animationSlice = createSlice({
    name: 'animation',
    initialState,
    reducers: {
        callNextAnimationFrame: (state) => {
            state.animationFrameIdx = state.animationFrameIdx + 1
        },
    }
})

export const { callNextAnimationFrame } = animationSlice.actions

export default animationSlice.reducer