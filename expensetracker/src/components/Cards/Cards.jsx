import React from 'react';
import styles from './Cards.module.css';

const Cards = ({ title, money, handleClick, buttonText, success=true }) => {
    return (
        <div className={styles.cardContainer}>
            <h3>
                {`${title}: `}
                <span className={success ? styles.success : styles.failure}>
                    {`₹${money}`}
                </span>
            </h3>
            <button handleClick={handleClick}>{buttonText}</button>
        </div>
    )
}

export default Cards