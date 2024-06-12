import React from 'react';
import styles from './Cards.module.css';
import Buttons from '../Buttons/Buttons';

const Cards = ({ title, money, handleClick, buttonText, buttonType, success=true }) => {
    return (
        <div className={styles.cardContainer}>
            <h3>
                {`${title}: `}
                <span className={success ? styles.success : styles.failure}>
                    {`₹${money}`}
                </span>
            </h3>
            <Buttons  handleClick={handleClick} style={buttonType} > {buttonText} </Buttons>
        </div>
    )
}

export default Cards