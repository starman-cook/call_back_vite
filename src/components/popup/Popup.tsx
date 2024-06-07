import { FunctionComponent, MouseEventHandler, ReactElement, useEffect, useState } from 'react';
import styles from './Popup.module.css';
import Form from '../form/Form';
import Response from '../response/Response';
type Props = {
    click: MouseEventHandler<HTMLDivElement>;
    show: boolean;
};
const Popup: FunctionComponent<Props> = ({ click, show }: Props): ReactElement => {
    const [responseText, setResponseText] = useState<string>('');
    useEffect(() => {
        setResponseText('');
    }, [show]);
    return (
        <>
            {show ? (
                <div className={styles.popup}>
                    {responseText ? (
                        <Response text={responseText} />
                    ) : (
                        <>
                            <p className={styles.title}>Zavolejte mi zpět</p>
                            <p className={styles.subtitle}>Zadejte prosím své telefonní číslo, zavoláme vám zpět</p>
                            <div onClick={click} className={styles.closeButton} />
                            <Form setResponseText={setResponseText} />
                        </>
                    )}
                </div>
            ) : null}
        </>
    );
};

export default Popup;
