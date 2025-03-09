import styles from "./SimpleButton.module.css"

export const SimpleButton = (props) => {
    return <button
        {...props}
        className={`${styles.button} ${props.className}`}
    >

    </button>
}