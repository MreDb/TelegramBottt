import React from 'react';
import styles from '../styles/components/Referral.module.css';

function Referral() {
    const referralLink = "https://t.me/your_bot?start=referral_code";

    return (
        <div className={styles.referral}>
            <h1>Referral</h1>
            <p>Share this link with your friends:</p>
            <p>{referralLink}</p>
        </div>
    );
}

export default Referral;
