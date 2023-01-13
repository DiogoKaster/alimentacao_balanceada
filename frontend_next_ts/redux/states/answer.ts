import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Answer from '../../types/Answer'

type AnswerState = {
    initialAnswer: Answer,
    answer: Answer
}

const initialState: AnswerState = {
    initialAnswer: {
        carbs: 0, prots: 0, fats: 0,
    },
    answer: {
        carbs: 0, prots: 0, fats: 0,
    }
}

export const answerSlice = createSlice({
    name: 'answer',
    initialState,
    reducers: {
        initiateAnswer: (state, action: PayloadAction<Answer>) => {
            state.initialAnswer = { ...action.payload }
            state.answer = { ...action.payload }
        },
        increaseAnswer: (state, action: PayloadAction<keyof Answer>) => {
            const type = action.payload

            const newAns: Answer = { ...state.answer }
            newAns[type] = state.answer[type] + 1

            state.answer = newAns
        },
        decreaseAnswer: (state, action: PayloadAction<keyof Answer>) => {
            const type = action.payload

            const newAns: Answer = { ...state.answer }
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