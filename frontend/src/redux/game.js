import { createSlice } from "@reduxjs/toolkit"

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        gameMode: 'student',
        login: true,
        loginEmail: null
    },
    reducers: {
        resetGameMode: (state) => {
            state.gameMode = 'student'
        },
        toggleGameMode: (state) => {
            state.gameMode = state.gameMode === 'student' ? 
                            'professor' : 'student'
        },
        login: (state, action) => {
            state.gameMode = 'professor'
            state.login = true
            state.loginEmail = action.payload
        }
    }
})

export const { toggleGameMode, resetGameMode, login } = gameSlice.actions

export default gameSlice.reducer