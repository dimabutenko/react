import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import { todoSlice } from './todoSlice'
import { type RootState } from '../app/store'

export const listenerMiddleware = createListenerMiddleware()
listenerMiddleware.startListening({
  matcher: isAnyOf(
    todoSlice.actions.add,
    todoSlice.actions.remove,
    todoSlice.actions.update,
    todoSlice.actions.clearCompleted
  ),
  effect: (action, listenerApi) => {
    localStorage.setItem(
      'todoState',
      JSON.stringify((listenerApi.getState() as RootState).todoState)
    )
  }
})
