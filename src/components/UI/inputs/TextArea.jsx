import styles from "./TextArea.module.css"

export const TextArea = ({label, textarea}) => {
    return <div className={styles.container}>
        {label && label}
        <textarea
            {...textarea}
            className={`${styles.textarea} ${textarea.className}`}
            readOnly={false}
        >
        </textarea>
    </div>
}