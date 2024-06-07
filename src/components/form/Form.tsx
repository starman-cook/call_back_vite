import { ChangeEvent, Dispatch, FormEvent, FunctionComponent, ReactElement, SetStateAction, useState } from 'react';
import styles from './Form.module.css';
import Input from '../input/Input';
import Button from '../button/Button';
import Select from '../select/Select';
import axios from 'axios';

type Props = {
    setResponseText: Dispatch<SetStateAction<string>>;
};

const Form: FunctionComponent<Props> = ({ setResponseText }: Props): ReactElement => {
    const [values, setValues] = useState<{
        phone: string;
        product: string;
    }>({
        phone: '',
        product: '',
    });
    const [errors, setErrors] = useState<{
        phone: boolean;
        product: boolean;
    }>({
        phone: false,
        product: false,
    });

    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setValues((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
        setErrors((prevState) => {
            return { ...prevState, [e.target.name]: false };
        });
    };

    const submit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        let stop: boolean = false;
        try {
            const value = values.phone.replace(/-/g, '');
            const regExp = new RegExp(
                /^(\+?420)?(2[0-9]{2}|3[0-9]{2}|4[0-9]{2}|5[0-9]{2}|72[0-9]|73[0-9]|77[0-9]|60[1-8]|56[0-9]|70[2-5]|79[0-9])[0-9]{3}[0-9]{3}$/,
            );

            if (!regExp.test(value)) {
                setErrors((prevState) => {
                    return { ...prevState, phone: true };
                });
                stop = true;
            }
            if (!values.product) {
                setErrors((prevState) => {
                    return { ...prevState, product: true };
                });
                stop = true;
            }

            if (stop) return;

            const formData = new FormData();
            formData.append('action', 'call_request');
            formData.append('phone', value);
            formData.append('product', values.product);
            await axios.post('/wp-admin/admin-ajax.php', formData);
            setResponseText('Děkujeme, brzy se vám ozveme');
        } catch (err) {
            console.log(err);
            setResponseText('Error :(');
        }
    };

    return (
        <form onSubmit={submit} id={'call_back_form_vlsr'} className={styles.form}>
            <Input hasError={errors.phone} change={changeHandler} errorText={'Chyba formátu'} />
            <Select hasError={errors.product} change={changeHandler} errorText={'Povinné'} />
            <Button />
        </form>
    );
};

export default Form;
