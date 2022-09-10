import { createSlice } from "@reduxjs/toolkit"

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        gameMode: 'student',
        loggedIn: window.sessionStorage.getItem('loggedInAlimentacaoBalanceada'),
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
            state.loggedIn = true
            window.sessionStorage.setItem('loggedInAlimentacaoBalanceada', true)
        }
    }
})

export const { toggleGameMode, resetGameMode, login } = gameSlice.actions

export default gameSlice.reducer