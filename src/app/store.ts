import { configureStore } from "@reduxjs/toolkit";
import introductionReducer from '../features/introductionSlice'
import postsReducer from '../features/postsSlice'

const store =  configureStore({
    reducer: {
        introduction: introductionReducer,
        all: postsReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

