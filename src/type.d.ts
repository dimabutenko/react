import {Filter} from "./store/filter";

interface ITodo {
    id: number;
    name: string;
    completed: bool;
}

type TodoState = {
    todos: ITodo[];
    filter: Filter
};