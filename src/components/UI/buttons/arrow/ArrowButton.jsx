import styles from "./ArrowButton.module.css"

export const ArrowButton = ({side, onClick, color, left}) => {
    return <button className={styles.button} onClick={onClick} style={{borderColor: color}}>
        {left && <svg xmlns="http://www.w3.org/2000/svg" width={side} height={side} viewBox="0 0 34 34" fill="none">
            <path
                d="M10.8321 16.4989L20.7488 6.58228C20.8876 6.44345 21.069 6.37545 21.2503 6.37545C21.4316 6.37545 21.613 6.44486 21.7518 6.58228C22.028 6.85853 22.028 7.30766 21.7518 7.58391L12.3366 16.9991L21.7518 26.4142C22.028 26.6905 22.028 27.1396 21.7518 27.4159C21.4755 27.6921 21.0264 27.6921 20.7502 27.4159L10.8335 17.4992C10.5558 17.2244 10.5559 16.7766 10.8321 16.4989Z"
                fill={color}/>
        </svg>}
        {!left && <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path
                d="M23.8487 18.0167L13.6403 28.225C13.4974 28.368 13.3107 28.438 13.1241 28.438C12.9374 28.438 12.7507 28.3665 12.6078 28.225C12.3234 27.9407 12.3234 27.4783 12.6078 27.194L22.2999 17.5019L12.6078 7.8098C12.3234 7.52542 12.3234 7.06309 12.6078 6.77871C12.8922 6.49434 13.3545 6.49434 13.6389 6.77871L23.8472 16.987C24.1331 17.27 24.133 17.7309 23.8487 18.0167Z"
                fill={color}/>
        </svg>}
    </button>
}