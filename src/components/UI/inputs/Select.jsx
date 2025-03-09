import styles from "./Select.module.css"
import {useState} from "react";
import {motion} from "motion/react";

const INITIAL_VALUE = ""

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

const Option = (props) => {
    return <option
        {...props}
        className={`${styles.option} ${props.className}`}
    >

    </option>
}

export const Select = ({
                           label = "Select options",
                           optionsData,
                           select,
                           required,
                           icon,
                           hasError
                       }) => {
    const [isEmpty, setIsEmpty] = useState(true);

    const onChangeHandler = (e) => {
        select.onChange(e);
        if (e.target.value !== INITIAL_VALUE) {
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    }

    return <div className={styles.container}>
        <div className={styles["arrow"]}>
            <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.70446 6.74687L0.871127 1.52757C0.78946 1.4545 0.749463 1.35906 0.749463 1.26362C0.749463 1.16818 0.790294 1.07274 0.871127 0.999671C1.03363 0.854276 1.29782 0.854276 1.46032 0.999671L6.99865 5.95502L12.537 0.999671C12.6995 0.854276 12.9637 0.854276 13.1262 0.999671C13.2887 1.14507 13.2887 1.38145 13.1262 1.52684L7.29284 6.74614C7.13117 6.89228 6.86779 6.89226 6.70446 6.74687Z" fill="black"/>
            </svg>
        </div>
        <motion.select
            variants={variantsInput}
            initial="normal"
            animate={hasError ? "error" : "normal"}
            {...select}
            className={styles.select}
            onChange={onChangeHandler}
        >
            <Option value={INITIAL_VALUE} required>

            </Option>
            {optionsData.map((option, index) => <Option key={index} value={option.value}>
                {option.text}
            </Option>)}
        </motion.select>
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
    </div>
}