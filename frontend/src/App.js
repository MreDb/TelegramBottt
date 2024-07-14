import React from 'react';
import Casino from './components/Casino';
import Referral from './components/Referral';
import Earnings from './components/Earnings';
import News from './components/News';
import Wallet from './components/Wallet';

function App() {
    const [activeTab, setActiveTab] = React.useState('casino');

    return (
        <div>
            <div>
                {activeTab === 'casino' && <Casino />}
                {activeTab === 'referral' && <Referral />}
                {activeTab === 'earnings' && <Earnings />}
                {activeTab === 'news' && <News />}
                {activeTab === 'wallet' && <Wallet />}
            </div>
            <div className="tab-bar">
                <img src="./assets/casino.png" alt="Casino" onClick={() => setActiveTab('casino')} />
                <img src="./assets/referral.png" alt="Referral" onClick={() => setActiveTab('referral')} />
                <img src="./assets/earnings.png" alt="Earnings" onClick={() => setActiveTab('earnings')} />
                <img src="./assets/news.png" alt="News" onClick={() => setActiveTab('news')} />
                <img src="./assets/wallet.png" alt="Wallet" onClick={() => setActiveTab('wallet')} />
            </div>
        </div>
    );
}

export default App;
