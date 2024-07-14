import React, { useState, useEffect } from 'react';
import styles from '../styles/components/Earnings.module.css';
import useInterval from '../hooks/useInterval';

function Earnings() {
    const [balance, setBalance] = useState(0);
    const [earning, setEarning] = useState(true);

    useInterval(() => {
        if (earning) {
            setBalance(balance + 0.0102);
        }
    }, 3000);

    useEffect(() => {
        const timer = setTimeout(() => {
            setEarning(false);
        }, 14400000); // 4 hours

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.earnings}>
            <h1>Earnings</h1>
            <p>Balance: {balance.toFixed(4)} Call</p>
            {earning ? (
                <p>Collecting earnings...</p>
            ) : (
                <button onClick={() => setBalance(balance + balance)}>Collect</button>
            )}
        </div>
    );
}

export default Earnings;
