import React from 'react';
import styles from '../styles/components/Wallet.module.css';

function Wallet() {
    const [balance, setBalance] = React.useState(0);

    const handleDeposit = () => {
        // Logic for deposit
    };

    const handleWithdraw = () => {
        if (balance >= 400000) {
            // Logic for withdrawal
        } else {
            alert('Minimum balance for withdrawal is 400,000 Call');
        }
    };

    return (
        <div className={styles.wallet}>
            <h1>Wallet</h1>
            <p>Balance: {balance} Call</p>
            <button onClick={handleDeposit}>Deposit</button>
            <button onClick={handleWithdraw}>Withdraw</button>
        </div>
    );
}

export default Wallet;
