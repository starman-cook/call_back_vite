import { ChangeEventHandler, FunctionComponent, ReactElement } from 'react';
import styles from './Input.module.css';
import { InputMask } from '@react-input/mask';

type Props = {
    change: ChangeEventHandler<HTMLInputElement>;
    hasError: boolean;
    errorText: string;
};

const Input: FunctionComponent<Props> = ({ change, hasError, errorText }: Props): ReactElement => {
    return (
        <>
            <div className={`${styles.input} ${hasError ? styles.input__error : ''}`}>
                <InputMask
                    name={'phone'}
                    className={styles.input__inner}
                    mask="+420-___-___-___"
                    replacement={{ _: /\d/ }}
                    showMask={true}
                    onChange={change}
                />
            </div>
            {hasError ? <p className={styles.errorText}>{errorText}</p> : null}
        </>
    );
};

export default Input;
