import styles from "./PointButton.module.css"

export const PointButton = ({side, onClick, color, key}) => {
    return <button
        className={styles.button}
        style={{backgroundColor: color, width: side, height: side}}
        onClick={onClick}
        key={key}
    >

    </button>
}