import styles from "./HaveAccountSection.module.css"
import {useTranslation} from "react-i18next";
import {CenterContainer} from "../../../components/UI/containers/CenterContainer.jsx";
import {Link} from "react-router";

export const HaveAccountSection = () => {
    const {t, i18n} = useTranslation();
    return <section className={styles.section}>
        <CenterContainer>
            <div className={styles['section-inner']}>
                <p className={styles.question}>{t("registration.with-account.question")}</p>
                <Link to="/login" className={styles.link}>
                    {t("registration.with-account.link")}
                </Link>
            </div>
        </CenterContainer>
    </section>
}