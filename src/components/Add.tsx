import styles from "./Add.module.scss";
import React, {KeyboardEventHandler, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { useAppDispatch } from '../app/hooks';
import { add } from '../store/todoSlice';

function Add() {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    function handleClick() {
        if (inputRef.current != null) {
            dispatch(add(inputRef.current.value));
            inputRef.current.value = '';
        }
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if(event.key == 'Enter') {
            handleClick();
        }
    }

    return (
        <div className={`card ${styles["add-card"]}`}>
            <input
                type="text"
                ref={inputRef}
                className={styles.input}
                placeholder="Create a new todo..."
                onKeyDown={handleKeyDown}
            />
            <button className={styles.button}
                    onClick={handleClick}>
                <FontAwesomeIcon icon={faCirclePlus} size="2xl" className={styles.icon}/>
            </button>
        </div>
    );
}

export default Add;