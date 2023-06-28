import React from 'react'
import Stat from './Stat'
import { Filter } from '../store/filter'
import styles from './Todos.module.scss'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { remove, todoState, update } from '../store/todoSlice'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { type ITodo, type TodoState } from '../type'
import Icon from './icon'
import Button from './button'

const Todos: React.FC = () => {
  const state: TodoState = useAppSelector(todoState)
  const dispatch = useAppDispatch()

  function handleChange (e: React.ChangeEvent<HTMLInputElement>, todo: ITodo): void {
    dispatch(update({ ...todo, completed: e.target.checked }))
  }

  return (
    <div>
      <ul className={styles.todos}>
        {state.todos
          .filter((x) => {
            if (state.filter === Filter.All) {
              return true
            }
            if (state.filter === Filter.Active && !x.completed) {
              return true
            }
            if (state.filter === Filter.Completed && x.completed) {
              return true
            }
            return false
          })
          .map((todo: ITodo) => (
            <li className="card" key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => {
                  handleChange(e, todo)
                }}
              />
              <p>{todo.name}</p>
              <Button onClick={() => dispatch(remove(todo.id))}>
                <Icon icon={faXmark} size="2xl" />
              </Button>
            </li>
          ))}
      </ul>
      <Stat />
    </div>
  )
}

export default Todos
