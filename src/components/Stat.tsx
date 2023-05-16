import styles from "./Stat.module.scss";
import React from "react";

function Stat() {
    return (
        <div className={`card ${styles.stat}`}>
            <p className={styles.corner}><span id="items-left">0</span> items left</p>
            <div className={styles.filter}>
                <button id="all" className={styles.on}>All</button>
                <button id="active">Active</button>
                <button id="completed">Completed</button>
            </div>
            <div className={styles.corner}>
                <button id="clear-completed">Clear Completed</button>
            </div>
        </div>
    );
}

export default Stat;