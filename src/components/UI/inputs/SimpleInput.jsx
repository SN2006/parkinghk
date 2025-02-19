import styles from "./SimpleInput.module.css"
import {motion} from "motion/react";

const variants = {
    normal: {
        borderWidth: 1,
        borderColor: "rgba(218, 102, 44, 1)",
    },
    error: {
        borderWidth: 3,
        borderColor: "rgba(255, 0, 0, 1)",
    }
}

export const SimpleInput = ({input, label, children, required, hasError}) => {
    return <div className={styles['input-container']}>
        <label className={styles.label}>
            <span>{label}</span>
            {required && <span className={styles.point}> *</span>}
        </label>
        <div style={{position: "relative"}}>
            <motion.input
                variants={variants}
                initial="normal"
                animate={hasError ? "error" : "normal"}
                className={styles.input}
                {...input}
            />
            {children}
        </div>
    </div>
}