import { createSlice } from "@reduxjs/toolkit"

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        gameMode: 'student',
    },
    reducers: {
        resetGameMode: (state) => {
            state.gameMode = 'student'
        },
        toggleGameMode: (state) => {
            state.gameMode = state.gameMode === 'student' ? 
                            'professor' : 'student'
        },
    }
})

export const { toggleGameMode, resetGameMode } = gameSlice.actions

export default gameSlice.reducer