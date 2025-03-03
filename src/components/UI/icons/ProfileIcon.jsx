import styles from "./SmallIcon.module.css"

export const ProfileIcon = () => {
    return <div className={styles.container}>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="8.50033" cy="12.3952" rx="4.95833" ry="2.47917" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
            <circle cx="8.50033" cy="4.95833" r="2.83333" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
    </div>
}