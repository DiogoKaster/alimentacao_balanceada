import { createSlice } from "@reduxjs/toolkit"

export const answerSlice = createSlice({
    name: 'foods',
    initialState: {
        initialAnswer: null,
        answer: null,
    },
    reducers: {
        initiateAnswer: (state, action) => {
            state.initialAnswer = {...action.payload}
            state.answer = {...action.payload}
        },
        increaseAnswer: (state, action) => {
            const type = action.payload

            const newAns = {...state.answer}
            newAns[type] = state.answer[type] + 1
            
            state.answer = newAns
        },
        decreaseAnswer: (state, action) => {
            const type = action.payload

            const newAns = {...state.answer}
            newAns[type] = state.answer[type] - 1
            
            state.answer = newAns
        }
    }
})

export const { 
    initiateAnswer, 
    increaseAnswer, 
    decreaseAnswer 
} = answerSlice.actions

export default answerSlice.reducer