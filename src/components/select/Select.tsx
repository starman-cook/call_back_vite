import { ChangeEventHandler, FunctionComponent, ReactElement } from 'react';
import styles from './Select.module.css';

type Props = {
    change: ChangeEventHandler<HTMLSelectElement>;
    hasError: boolean;
    errorText: string;
};
/**
 * 1Žádost o úvěr -> ID 2 , BrokerfinSjednej
2Pojištění auta -> ID 4, Sjednej-Pojisteni Aut (edited)
3Pojištění majetku ID 7, home_insurance-sjednej
4Životní pojištění ID 8, life_insurance-sjednej
5Pojištění domácích mazlíčků ID 11, pet_insurance
6Energie ID 18, Energie_sjednej
7Cestovní pojištění ID 16, travel_insurance-sjednej
8jiný požadavek ID 21, sjednej_web
 */
const options = [
    {
        label: 'Žádost o úvěr',
        value: 'BrokerfinSjednej',
    },
    {
        label: 'Pojištění auta',
        value: 'Sjednej-Pojisteni',
    },
    {
        label: 'Pojištění majetku',
        value: 'home_insurance-sjednej',
    },
    {
        label: 'Životní pojištění',
        value: 'life_insurance-sjednej',
    },
    {
        label: 'Pojištění domácích mazlíčků',
        value: 'pet_insurance',
    },
    {
        label: 'Energie',
        value: 'Energie_sjednej',
    },
    {
        label: 'Cestovní pojištění',
        value: 'travel_insurance-sjednej',
    },
    {
        label: 'jiný požadavek',
        value: 'sjednej_web',
    },
];

const Select: FunctionComponent<Props> = ({ change, hasError, errorText }: Props): ReactElement => {
    return (
        <>
            <div className={`${styles.select} ${hasError ? styles.select__error : ''}`}>
                <select defaultValue={''} name={'product'} onChange={change} className={styles.select__inner}>
                    <option value={''} disabled>
                        Vyberte, s čím vám můžeme pomoci
                    </option>
                    {options.map((el: { label: string; value: string }) => {
                        return (
                            <option style={{ color: 'black' }} key={el.value} value={el.value}>
                                {el.label}
                            </option>
                        );
                    })}
                </select>
            </div>
            {hasError ? <p className={styles.errorText}>{errorText}</p> : null}
        </>
    );
};

export default Select;
