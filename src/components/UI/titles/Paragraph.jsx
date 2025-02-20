import styles from "./Paragraph.module.css"

export const Paragraph = (props) => {
    return <p
        className={styles.text}
        {...props}
    >
        {props.children}
    </p>
}