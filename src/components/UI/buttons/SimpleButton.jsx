import styles from "./SimpleButton.module.css"

export const SimpleButton = (props) => {
    return <button
        className={styles.button}
        {...props}
    >

    </button>
}