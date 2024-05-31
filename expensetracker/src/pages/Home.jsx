import React, { useState } from 'react';
import styles from './Home.module.css';
import Cards from '../components/Cards/Cards';

const Home = () => {
    const [wallet, setWallet] = useState(5000);
    const [expense, setExpense] = useState(0);
    return (
        <div className={styles.container}>
            <h1>Expense Tracker</h1>
            <div className={styles.cardGroup}>
                <Cards
                    title="Wallet Balance"
                    money={wallet}
                    buttonText="+ Add Income"
                />

                <Cards
                    title="Expenses"
                    money={expense}
                    buttonText="+ Add Expense"
                    success={false}
                />
            </div>
        </div>
    )
}

export default Home