import styles from "./HaveAccountSection.module.css"
import {CenterContainer} from "../../../components/UI/containers/CenterContainer.jsx";
import {Link} from "react-router";
import {useTranslation} from "react-i18next";

export const NotHaveAccountSection = () => {
    const {t, i18n} = useTranslation();
    return <section className={styles.section}>
        <CenterContainer>
            <div className={styles['section-inner']}>
                <p className={styles.question}>{t("login.without-account.question")}</p>
                <Link to="/registration" className={styles.link}>
                    {t("login.without-account.link")}
                </Link>
            </div>
        </CenterContainer>
    </section>
}