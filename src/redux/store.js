import { configureStore } from '@reduxjs/toolkit'
import { Counter, Theme, Started } from './reducer'
export const store = configureStore({
    reducer: {
        Counter,
        Theme,
        Started
    },
})