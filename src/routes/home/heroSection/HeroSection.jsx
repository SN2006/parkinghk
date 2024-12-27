import styles from "./HeroSection.module.css"
import {CenterContainer} from "../../../components/UI/containers/CenterContainer.jsx";
import SmallHeroBg from "../../../assets/backgrounds/hero/hero-ng-small.jpg"
import {useTranslation} from "react-i18next";
import {Link} from "react-router";

export const HeroSection = () => {
    const {t, i18n} = useTranslation();

    return <section className={styles.hero}>
        <CenterContainer>
            <div className={styles['hero-inner']}>
                <div className={styles['hero__img']}>
                    <div style={{
                        display: "block",
                        width: "100%",
                        height: "155px",
                    }}></div>
                    <img src={SmallHeroBg} alt="hero img"/>
                </div>
                <div className={styles['hero__text']}>
                    <h2 className={styles['hero__slogan']}>
                        {t("main.hero.slogan")}
                    </h2>
                    <p className={styles['hero__info']}>
                        {t("main.hero.description")}
                    </p>
                </div>
                <div className={styles['hero__actions']}>
                    <Link to="/" className={styles['hero__link']}>
                        {t("main.hero.placeButton")}
                    </Link>
                    <Link to="/" className={styles['hero__link']}>
                        {t("main.hero.WantButton")}
                    </Link>
                </div>
            </div>
        </CenterContainer>
    </section>
}