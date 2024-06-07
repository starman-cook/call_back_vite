import { useState } from 'react';
import PhoneButton from './components/phoneButton/PhoneButton';
import Popup from './components/popup/Popup';
import styles from './App.module.css';

function App() {
    const [showPopup, setShowSetUp] = useState<boolean>(false);

    const togglePopup = () => {
        setShowSetUp(!showPopup);
    };
    return (
        <div className={styles.App}>
            <PhoneButton click={togglePopup} />
            <Popup show={showPopup} click={togglePopup} />
        </div>
    );
}

export default App;
