import React from "react";
import styles from "./header.module.css"; // css module
// css module limitan el scope de tu css

export const Header = () => {
    return  (
        <div className={styles.header}>
           Header
           <span className={styles.negrita}> en negrita</span>
        </div>
    )
}

