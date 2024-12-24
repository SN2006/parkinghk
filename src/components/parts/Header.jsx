import {Logo} from "../UI/logo/Logo.jsx";
import {CenterContainer} from "../UI/containers/CenterContainer.jsx";
import styles from "./Header.module.css"
import {Link} from "react-router";
import {useTranslation} from "react-i18next";
import {BurgerMenu} from "./BurgerMenu.jsx";

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
                    <BurgerMenu/>
                </nav>
            </div>
        </CenterContainer>
    </header>
}