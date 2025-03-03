import styles from "./SimpleInput.module.css"
import {motion} from "motion/react";
import {useState} from "react";

const variantsInput = {
    normal: {
        borderBottomColor: "rgba(218, 102, 44, 1)",
    },
    error: {
        borderBottomColor: "rgba(255, 0, 0, 1)",
    }
}

const labelVariants = {
    normal: {
        color: "rgb(0, 0, 0)",
    },
    error: {
        color: "rgba(255, 0, 0, 1)",
    }
}

export const SimpleInput = ({input, label, children, required, hasError, icon}) => {
    const [isEmpty, setIsEmpty] = useState(true);

    const onChangeHandler = (e) => {
        input.onChange(e);
        if (e.target.value.length > 0) {
            setIsEmpty(false);
        }else{
            setIsEmpty(true);
        }
    }

    return <div className={styles['input-container']}>
        <motion.input
            variants={variantsInput}
            initial="normal"
            animate={hasError ? "error" : "normal"}
            className={styles.input}
            {...input}
            onChange={onChangeHandler}
        />
        <div className={`${styles['label-container']} ${isEmpty ? "" : styles.hidden}`}>
            {icon && icon}
            <motion.label
                className={`${styles.label}`}
                variants={labelVariants}
                initial="normal"
                animate={hasError ? "error" : "normal"}
            >
                <span>{label}</span>
                {required && <span className={styles.point}> *</span>}
            </motion.label>
        </div>
        {children}
    </div>
}