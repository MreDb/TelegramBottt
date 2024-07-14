import React, { useState } from 'react';
import styles from '../styles/components/Casino.module.css';

function Casino() {
    const [balance, setBalance] = useState(1000);
    const [result, setResult] = useState(["🍒", "🍒", "🍒"]);

    const spin = () => {
        const symbols = ["🍒", "🍋", "🍇", "🪙"];
        const newResult = [
            symbols[Math.floor(Math.random() * symbols.length)],
            symbols[Math.floor(Math.random() * symbols.length)],
            symbols[Math.floor(Math.random() * symbols.length)]
        ];
        setResult(newResult);

        const isWin = newResult.every((symbol) => symbol === newResult[0]);
        if (isWin) {
            if (newResult[0] === "🪙") {
                setBalance(balance + 1200);
            } else {
                setBalance(balance + 200);
            }
        } else {
            setBalance(balance - 100);
        }
    };

    return (
        <div className={styles.casino}>
            <h1>Casino</h1>
            <div className={styles.slots}>
                {result.map((symbol, index) => (
                    <div key={index} className={styles.slot}>{symbol}</div>
                ))}
            </div>
            <div className={styles.balance}>Balance: {balance} Call</div>
            <button className={styles.betButton} onClick={spin}>Bet 100 Call</button>
        </div>
    );
}

export default Casino;
