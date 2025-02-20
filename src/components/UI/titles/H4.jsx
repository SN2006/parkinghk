import styles from "./H4.module.css"

export const H4 = (props) => {
    return <h4
        className={styles.text}
        {...props}
    >
        {props.children}
    </h4>
}