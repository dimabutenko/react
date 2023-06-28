import styles from './Add.module.scss'
import React, { useRef } from 'react'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'
import { useAppDispatch } from '../app/hooks'
import { add } from '../store/todoSlice'
import Button from './atoms/Button'
import Icon from './atoms/Icon'
import TextInput from './atoms/TextInput'

const Add: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  function handleClick (): void {
    if (inputRef.current != null) {
      dispatch(add(inputRef.current.value))
      inputRef.current.value = ''
    }
  }

  function handleKeyDown (event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <div className={`card ${styles['add-card']}`}>
      <TextInput
        type="text"
        setInputRef={inputRef}
        placeholder="Create a new todo..."
        onKeyDown={handleKeyDown}
        class={styles.input}
      />
      <Button class={styles.button} onClick={handleClick}>
        <Icon icon={faCirclePlus} size="2xl" class={styles.icon} />
      </Button>
    </div>
  )
}

export default Add
