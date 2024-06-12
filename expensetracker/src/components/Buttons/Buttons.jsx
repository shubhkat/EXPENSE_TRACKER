import React from 'react';
import styles from './Buttons.module.css';

const Buttons = ({ children, handleClick, style = 'success', shadow = false, type = 'button' }) => {
    return (
        <button
            type={type}
            onClick={handleClick}
            className={`${styles.button} ${styles[style]} ${shadow && styles.shadow}`}
        >
            {children}
        </button>
    )
}

export default Buttons;
