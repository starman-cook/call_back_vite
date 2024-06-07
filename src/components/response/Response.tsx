import { FunctionComponent, ReactElement } from 'react';
import styles from './Response.module.css';
type Props = {
    text: string;
};

const Response: FunctionComponent<Props> = ({ text }: Props): ReactElement => {
    return <p className={styles.response}>{text}</p>;
};

export default Response;
