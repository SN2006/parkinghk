import styles from "./BurgerMenu.module.css"
import {MenuButton} from "../UI/buttons/menu/MenuButton.jsx";
import {useState} from "react";
import {motion} from "motion/react";
import {Link} from "react-router";
import {useTranslation} from "react-i18next";

const burgerVariants = {
    open: {
        translateX: "0%",
    },
    closed: {
        translateX: "100%",
    }
}

const BurgerLink = ({to, text, onClick}) => {
    return <Link to={to} className={styles['burger-menu__link']} onClick={onClick}>
        <p className={styles['burger-menu__link-text']}>
            {text}
        </p>
        <div className={styles['burger-menu__link-arrow']}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M16.3543 12.3543L9.35426 19.3543C9.25626 19.4523 9.12825 19.5003 9.00025 19.5003C8.87225 19.5003 8.74425 19.4513 8.64625 19.3543C8.45125 19.1593 8.45125 18.8422 8.64625 18.6472L15.2922 12.0012L8.64625 5.35523C8.45125 5.16023 8.45125 4.8432 8.64625 4.6482C8.84125 4.4532 9.15828 4.4532 9.35328 4.6482L16.3533 11.6482C16.5493 11.8422 16.5493 12.1583 16.3543 12.3543Z"
                    fill="black"/>
            </svg>
        </div>
    </Link>
}

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {t, i18n} = useTranslation();

    const onClickHandler = () => {
        setIsOpen(prev => !prev);
    }

    const onClickLink = () => {
        setIsOpen(false);
    }

    return <>
        <MenuButton
            color="white"
            isOpen={isOpen}
            onClick={onClickHandler}
        />
        <motion.div
            transition={{
                ease: "easeInOut",
            }}
            className={styles['burger-menu']}
            variants={burgerVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
        >
            <div className={styles['burger-menu__links']}>
                <BurgerLink
                    to="/login"
                    text={t('burger.links.login')}
                    onClick={onClickLink}
                />
                <BurgerLink
                    to="/"
                    text={t('burger.links.register')}
                    onClick={onClickLink}
                />
                <BurgerLink
                    to="/"
                    text={t('burger.links.home')}
                    onClick={onClickLink}
                />
                <BurgerLink
                    to="/"
                    text={t('burger.links.placeCarpark')}
                    onClick={onClickLink}
                />
                <BurgerLink
                    to="/"
                    text={t('burger.links.wantCarpark')}
                    onClick={onClickLink}
                />
                <BurgerLink
                    to="/how-to-use"
                    text={t('burger.links.video')}
                    onClick={onClickLink}
                />
                <BurgerLink
                    to="/"
                    text={t('burger.links.bargain')}
                    onClick={onClickLink}
                />
                <BurgerLink
                    to="/"
                    text={t('burger.links.faq')}
                    onClick={onClickLink}
                />
                <BurgerLink
                    to="/"
                    text={t('burger.links.media')}
                    onClick={onClickLink}
                />
                <BurgerLink
                    to="/"
                    text={t('burger.links.profile')}
                    onClick={onClickLink}
                />
                <BurgerLink
                    to="/"
                    text={t('burger.links.contactUs')}
                    onClick={onClickLink}
                />
            </div>
        </motion.div>
    </>
}