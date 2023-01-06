import { createSlice } from "@reduxjs/toolkit"

type GameState = {
    gameMode: string,
    loggedIn: boolean
}

const initialState: GameState = {
    gameMode: 'student',
    loggedIn: false,
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        resetGameMode: (state) => {
            state.gameMode = 'student'
        },
        toggleGameMode: (state) => {
            state.gameMode = state.gameMode === 'student' ?
                'professor' : 'student'
        },
        login: (state) => {
            state.gameMode = 'professor'
            state.loggedIn = true
            window.sessionStorage.setItem('loggedInAlimentacaoBalanceada', 'true')
        }
    }
})

export const { toggleGameMode, resetGameMode, login } = gameSlice.actions

export default gameSlice.reducer