import styles from "./Add.module.scss";
import React from "react";

function Add() {
    return (
        <div className={`card ${styles["add-card"]}`}>
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