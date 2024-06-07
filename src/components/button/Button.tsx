import { FunctionComponent, ReactElement } from 'react';
import styles from './Button.module.css';

const Button: FunctionComponent = (): ReactElement => {
    return <button className={styles.button}>Odeslat</button>;
};

export default Button;
