import styles from "./SearchInput.module.css"
import {useState} from "react";

export const SearchInput = ({tabs, buttonBackground, placeholder, tabsGap}) => {
    const [buttonText, setButtonText] = useState(tabs[0].buttonText);

    return <div className={styles.container}>
        <div className={styles.tabs} style={{gap: tabsGap}}>
            {tabs.map((tab, i) => <button
                key={`tab_${i}`}
                className={`${styles.tab} ${buttonText === tab.buttonText ? styles['tab--active'] : ''}`}
                onClick={() => {
                    setButtonText(tab.buttonText);
                }}
            >
                {tab.tabText}
            </button>)}
        </div>
        <form className={styles.form}>
            <input
                className={styles.input}
                placeholder={placeholder}
            />
            <button
                type="submit"
                className={styles.button}
                style={{
                    background: buttonBackground,
                }}
            >
                {buttonText}
            </button>
        </form>
    </div>
}