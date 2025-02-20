import styles from "./RadioInput.module.css"
import {motion} from "motion/react";

const variants = {
    normal: {
        borderWidth: 1,
        borderColor: "rgba(218, 102, 44, 1)"
    },
    error: {
        borderWidth: 3,
        borderColor: "rgba(255, 0, 0, 1)"
    }
}

export const RadioInput = ({input, label, hasError}) => {
    return <div className={styles.container}>
        <input
            type="radio"
            className={styles.input}
            {...input}
        />
        <motion.label
            htmlFor={input.id}
            className={styles.label}
            variants={variants}
            animate={hasError ? "error" : "normal"}
        >{label}</motion.label>
    </div>
}