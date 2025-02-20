import styles from "./CheckInput.module.css"

export const CheckInput = ({children, input, hasError}) => {
    return <div className={styles.container}>
        <input
            type="checkbox"
            {...input}
            className={styles.input}
        />
        <label
            className={styles.label + (hasError ? " " + styles["label--error"] : "")}
            htmlFor={input.id}
        >
            {children}
        </label>
    </div>
}