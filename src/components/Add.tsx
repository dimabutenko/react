import styles from "./Add.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Add() {
    return (
        <div className={`card ${styles["add-card"]}`}>
            {/*<button className={styles.button}>*/}
            {/*    <FontAwesomeIcon icon={faCirclePlus} size="2xl" className={styles.icon}/>*/}
            {/*</button>*/}
            <input
                type="text"
                className={styles.input}
                placeholder="Create a new todo..."
                spellCheck="false"
                autoComplete="off"/>
        </div>
    );
}

export default Add;