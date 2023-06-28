import React from 'react'
import styles from './Stat.module.scss'
import { Filter } from '../store/filter'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { clearCompleted, todoState, updateFilter } from '../store/todoSlice'

const Stat: React.FC = () => {
  const todos = useAppSelector(todoState)
  const dispatch = useAppDispatch()

  return (
    <div className={`card ${styles.stat}`}>
      <p className={styles.corner}>
        <span id="items-left">{todos.todos.filter((x) => !x.completed).length}</span> items left
      </p>
      <div className={styles.filter}>
        <button
          className={todos.filter === Filter.All ? styles.on : undefined}
          onClick={() => dispatch(updateFilter(Filter.All))}
        >
          All
        </button>
        <button
          className={todos.filter === Filter.Active ? styles.on : undefined}
          onClick={() => dispatch(updateFilter(Filter.Active))}
        >
          Active
        </button>
        <button
          className={todos.filter === Filter.Completed ? styles.on : undefined}
          onClick={() => dispatch(updateFilter(Filter.Completed))}
        >
          Completed
        </button>
      </div>
      <div className={styles.corner}>
        <button onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
      </div>
    </div>
  )
}

export default Stat
