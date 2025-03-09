import styles from "./H2.module.css"

export const H2 = ({children, className}) => {
    return <h2 className={`${styles.h2} ${className}`}>
        {children}
    </h2>
}