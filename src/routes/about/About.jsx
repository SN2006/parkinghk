import styles from "./About.module.css"
import {CenterContainer} from "../../components/UI/containers/CenterContainer.jsx";
import {H2} from "../../components/UI/titles/H2.jsx";
import {useTranslation} from "react-i18next";
import {H4} from "../../components/UI/titles/H4.jsx";
import {Paragraph} from "../../components/UI/titles/Paragraph.jsx";
import {useEffect} from "react";

export const About = () => {
    const {t, i18n} = useTranslation();
    return <main>
        <section className={styles.about}>
            <CenterContainer>
                <div className={styles['about-inner']}>
                    <H2>{t("about.title")}</H2>
                    <div className={styles['about__content']}>
                        <H4>ParkingHK.com</H4>
                        <Paragraph>
                            {t("about.text")}
                        </Paragraph>
                    </div>
                </div>
            </CenterContainer>
        </section>
    </main>
}