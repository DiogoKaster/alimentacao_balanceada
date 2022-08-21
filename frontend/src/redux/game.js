import { createSlice } from "@reduxjs/toolkit"

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        gameMode: 'student',
    },
    reducers: {
        toggleGameMode: (state) => {
            state.gameMode = state.gameMode === 'student' ? 
                            'professor' : 'student'
        },
    }
})

export const { toggleGameMode } = gameSlice.actions

export default gameSlice.reducer