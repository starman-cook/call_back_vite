import { FunctionComponent, MouseEventHandler, ReactElement } from "react"
import styles from './PhoneButton.module.css'

type Props = {
    click: MouseEventHandler<HTMLDivElement>
}
const PhoneButton: FunctionComponent<Props> = ({click}: Props): ReactElement => {
    return (
        <div onClick={click} className={styles.button} />
    )
}

export default PhoneButton