import styles from "./HeroSection.module.css"
import {CenterContainer} from "../../../components/UI/containers/CenterContainer.jsx";
import SmallHeroBg from "../../../assets/backgrounds/hero/hero-ng-small.jpg"
import {useTranslation} from "react-i18next";
import {Link} from "react-router";
import {SearchInput} from "../../../components/UI/inputs/SearchInput.jsx";

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
                <SearchInput
                    buttonBackground="linear-gradient(180deg, #2D6F4A 0%, #FFFFFF 370.37%)"
                    placeholder={t("inputs.search.placeholder")}
                    tabs={[
                        {tabText: t("inputs.search.tabs.driver"), buttonText: t("inputs.search.buttons.find")},
                        {tabText: t("inputs.search.tabs.owner"), buttonText: t("inputs.search.buttons.post")}
                    ]}
                    tabsGap={20}
                />
                <h2 className={styles['hero__slogan']}>
                    {t("main.hero.slogan")}
                </h2>
                <p className={styles['hero__info']}>
                    {t("main.hero.description")}
                </p>
                {/*<div className={styles['hero__actions']}>*/}
                {/*    <Link to="/" className={styles['hero__link']}>*/}
                {/*        {t("main.hero.placeButton")}*/}
                {/*    </Link>*/}
                {/*    <Link to="/" className={styles['hero__link']}>*/}
                {/*        {t("main.hero.WantButton")}*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </CenterContainer>
    </section>
}