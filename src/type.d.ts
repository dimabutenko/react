import { type Filter } from './store/filter'

interface ITodo {
  id: number
  name: string
  completed: boolean
}

interface TodoState {
  todos: ITodo[]
  filter: Filter
}
