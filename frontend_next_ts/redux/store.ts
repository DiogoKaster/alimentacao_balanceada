import { configureStore } from '@reduxjs/toolkit'
import game from '../redux/states/game'
import foods from '../redux/states/foods'
import animation from './states/animation'
import answer from '../redux/states/answer'

const store = configureStore({
    reducer: {
        'game': game,
        'foods': foods,
        'animation': animation,
        'answer': answer,

    }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch