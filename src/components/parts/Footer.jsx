import styles from "./Footer.module.css"
import {CenterContainer} from "../UI/containers/CenterContainer.jsx";
import {useTranslation} from "react-i18next";
import {Logo, LogoImage} from "../UI/logo/Logo.jsx";
import {Link} from "react-router";

export const Footer = () => {
    const {t, i18n} = useTranslation();
    return <footer className={styles['footer-wrapper']}>
        <CenterContainer>
            <div className={styles['footer-inner']}>
                <div className={styles['footer__links']}>
                    <div className={`${styles['footer__logo-box']} ${styles['footer__logo-box--big']}`}>
                        <LogoImage width={147} height={58}/>
                    </div>
                    <div className={`${styles['footer__logo-box']} ${styles['footer__logo-box--small']}`}>
                        <LogoImage width={94} height={37}/>
                    </div>
                    <Link to={`/`} className={`${styles['footer__links-link']} ${styles['link1']}`}>
                        {t('footer.links.faq')}
                    </Link>
                    <Link to={`/`} className={`${styles['footer__links-link']} ${styles['link2']}`}>
                        {t('footer.links.userGuide')}
                    </Link>
                    <Link to={`/`} className={`${styles['footer__links-link']} ${styles['link3']}`}>
                        {t('footer.links.contactUs')}
                    </Link>
                    <Link to={`/`} className={`${styles['footer__links-link']} ${styles['link4']}`}>
                        {t('footer.links.agentRegister')}
                    </Link>
                    <Link to={`/`} className={`${styles['footer__links-link']} ${styles['link5']}`}>
                        {t('footer.links.termsConditions')}
                    </Link>
                    <Link to={`/`} className={`${styles['footer__links-link']} ${styles['link6']}`}>
                        {t('footer.links.privatePolicy')}
                    </Link>
                </div>
                <p className={styles['footer__copyright']}>
                    {t('footer.copyright')}
                </p>
            </div>
        </CenterContainer>
    </footer>
}