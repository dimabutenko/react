import { configureStore } from '@reduxjs/toolkit'
import todoReducer, { initialState } from '../store/todoSlice'
import { listenerMiddleware } from '../store/middleware'

const todoState = JSON.parse(localStorage.getItem('todoState') ?? 'null')

export const store = configureStore({
  preloadedState: {
    todoState: todoState === null ? initialState : todoState
  },
  reducer: {
    todoState: todoReducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), listenerMiddleware.middleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
