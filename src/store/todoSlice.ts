import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filter } from './filter';
import type { RootState } from '../app/store';
import { ITodo, TodoState } from '../type';

export const initialState: TodoState = {
  todos: [],
  filter: Filter.All,
};

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add(state: TodoState, action: PayloadAction<string>) {
      state.todos.push({
        id: Math.random(),
        name: action.payload,
        completed: false,
      });
    },
    update(state: TodoState, action: PayloadAction<ITodo>) {
      const index = state.todos.map((x) => x.id).indexOf(action.payload.id, 0);
      if (index > -1) {
        state.todos[index].completed = action.payload.completed;
      }
    },
    remove(state: TodoState, action: PayloadAction<number>) {
      const index = state.todos.map((x) => x.id).indexOf(action.payload, 0);
      if (index > -1) {
        state.todos.splice(index, 1);
      }
    },
    updateFilter(state: TodoState, action: PayloadAction<Filter>) {
      state.filter = action.payload;
    },
    clearCompleted(state: TodoState) {
      state.todos = state.todos.filter((x) => !x.completed);
    },
  },
});

export const { add, update, remove, updateFilter, clearCompleted } = todoSlice.actions;
export const todoState = (state: RootState) => state.todoState;
export default todoSlice.reducer;
