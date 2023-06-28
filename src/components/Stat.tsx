import React from 'react'
import styles from './Stat.module.scss'
import { Filter } from '../store/filter'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { clearCompleted, todoState, updateFilter } from '../store/todoSlice'
import Button from './button'

const Stat: React.FC = () => {
  const todos = useAppSelector(todoState)
  const dispatch = useAppDispatch()

  return (
    <div className={`card ${styles.stat}`}>
      <p className={styles.corner}>
        <span id="items-left">{todos.todos.filter((x) => !x.completed).length}</span> items left
      </p>
      <div className={styles.filter}>
        <Button
          class={todos.filter === Filter.All ? styles.on : undefined}
          onClick={() => dispatch(updateFilter(Filter.All))}
        >
          All
        </Button>
        <Button
          class={todos.filter === Filter.Active ? styles.on : undefined}
          onClick={() => dispatch(updateFilter(Filter.Active))}
        >
          Active
        </Button>
        <Button
          class={todos.filter === Filter.Completed ? styles.on : undefined}
          onClick={() => dispatch(updateFilter(Filter.Completed))}
        >
          Completed
        </Button>
      </div>
      <div className={styles.corner}>
        <Button onClick={() => dispatch(clearCompleted())}>Clear Completed</Button>
      </div>
    </div>
  )
}

export default Stat
