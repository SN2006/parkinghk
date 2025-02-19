import styles from "./PointButton.module.css"

export const PointButton = ({side, onClick, color}) => {
    return <button
        className={styles.button}
        style={{backgroundColor: color, width: side, height: side}}
        onClick={onClick}
    >

    </button>
}