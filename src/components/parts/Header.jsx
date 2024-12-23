import {Logo} from "../UI/logo/Logo.jsx";
import {CenterContainer} from "../UI/containers/CenterContainer.jsx";
import styles from "./Header.module.css"
import {Link} from "react-router";
import {useTranslation} from "react-i18next";

const locales = {
    "en": {
        label: "中文",
        changeTo: "zh"
    },
    "zh": {
        label: "English",
        changeTo: "en"
    },
}

const Links = ({t, i18n}) => {
    return <>
        <Link to="/" className={styles['header__links-link']}>
            {t('header.links.info')}
        </Link>
        <Link to="/" className={styles['header__links-link']}>
            {t('header.links.login')}
        </Link>
        <button
            className={`empty-btn ${styles['header__links-link']}`}
            onClick={() => {
                i18n.changeLanguage(locales[i18n.resolvedLanguage].changeTo)
            }}
        >
            {locales[i18n.resolvedLanguage].label}
        </button>
    </>
}

export const Header = () => {
    const {t, i18n} = useTranslation();
    return <header className={styles['header-wrapper']}>
        <CenterContainer>
            <div className={styles['header-inner']}>
                <div className={styles['header__logo--big']}>
                    <Logo gap={26} imageHeight={58} imageWidth={147} labelHeight={44} labelWidth={260}/>
                </div>
                <div className={styles['header__logo--small']}>
                    <Logo gap={26} imageHeight={37} imageWidth={95} labelHeight={28} labelWidth={167}/>
                </div>
                <nav className={`${styles['header__links']} ${styles['header__links--big']}`}>
                    <Links i18n={i18n} t={t}/>
                </nav>
                <nav className={`${styles['header__links']} ${styles['header__links--small']}`}>
                    <button className={"empty-btn"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path
                                d="M3.21191 6C3.21191 5.724 3.43591 5.5 3.71191 5.5H21.7119C21.9879 5.5 22.2119 5.724 22.2119 6C22.2119 6.276 21.9879 6.5 21.7119 6.5H3.71191C3.43591 6.5 3.21191 6.276 3.21191 6ZM21.7119 11.5H3.71191C3.43591 11.5 3.21191 11.724 3.21191 12C3.21191 12.276 3.43591 12.5 3.71191 12.5H21.7119C21.9879 12.5 22.2119 12.276 22.2119 12C22.2119 11.724 21.9879 11.5 21.7119 11.5ZM21.7119 17.5H3.71191C3.43591 17.5 3.21191 17.724 3.21191 18C3.21191 18.276 3.43591 18.5 3.71191 18.5H21.7119C21.9879 18.5 22.2119 18.276 22.2119 18C22.2119 17.724 21.9879 17.5 21.7119 17.5Z"
                                fill="white"/>
                        </svg>
                    </button>
                    {/*<Links i18n={i18n} t={t}/>*/}
                </nav>
            </div>
        </CenterContainer>
    </header>
}