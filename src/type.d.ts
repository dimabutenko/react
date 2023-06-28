import { Filter } from './store/filter';

interface ITodo {
  id: number;
  name: string;
  completed: boolean;
}

type TodoState = {
  todos: ITodo[];
  filter: Filter;
};
