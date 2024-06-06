import { FunctionComponent, ReactElement } from "react"
import styles from './Button.module.css'
const imgLocation = () => {
    if (import.meta.env.VITE_APP_IS_DEV) {
        return 'https://callbackvite.netlify.app/'
    } else {
        return ''
    }
}
const Button: FunctionComponent = (): ReactElement => {
    return (
        <>
        <div style={{
            width: "500px",
            height: "500px",
            background: "pink"
        }}>
            <img src={`${imgLocation()}d.png`} alt="asas" />
        </div>
        <button className={styles.button}>CLICK</button>

        </>
    )
}

export default Button