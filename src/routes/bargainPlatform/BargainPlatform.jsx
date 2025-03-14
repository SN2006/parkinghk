import styles from "./BargainPlatform.module.css"
import {CenterContainer} from "../../components/UI/containers/CenterContainer.jsx";
import {H2} from "../../components/UI/titles/H2.jsx";
import {useTranslation} from "react-i18next";
import {H4} from "../../components/UI/titles/H4.jsx";
import {Paragraph} from "../../components/UI/titles/Paragraph.jsx";
import {LinkWithScrolling} from "../../components/UI/links/LinkWithScrolling.jsx";
import {useEffect} from "react";

export const BargainPlatform = () => {

    const {t, i18n} = useTranslation();

    useEffect(() => {
        document.title = "Carpark Bargain Platform";
    }, []);

    return <section className={styles["bargain-platform"]}>
        <CenterContainer>
            <div className={styles["bargain-platform-inner"]}>
                <H2>{t("bargainPlatform.title")}</H2>
                <div className={styles["bargain-platform__container"]}>
                    <H4>{t("bargainPlatform.questions.first.question")}</H4>
                    <Paragraph>
                        <span>{t("bargainPlatform.questions.first.answer")}</span>
                        <span
                            style={{
                                fontStyle: "italic",
                                fontWeight: 500
                            }}
                        >
                            {t("bargainPlatform.questions.first.italic")}
                        </span>
                    </Paragraph>
                </div>
                <div className={styles["bargain-platform__question-container"]}>
                    <H4>{t("bargainPlatform.questions.second.question")}</H4>
                    <Paragraph>
                        {t("bargainPlatform.questions.second.answer")}
                    </Paragraph>
                </div>
                <div className={styles["bargain-platform__question-container"]}>
                    <H4>{t("bargainPlatform.questions.third.question")}</H4>
                    <Paragraph>
                        {t("bargainPlatform.questions.third.answer")}
                    </Paragraph>
                </div>
                <div className={styles["bargain-platform__question-container"]}>
                    <H4>{t("bargainPlatform.questions.fourth.question")}</H4>
                    <Paragraph>
                        {t("bargainPlatform.questions.fourth.answer")}
                    </Paragraph>
                </div>
                <div className={styles["bargain-platform__question-container"]}>
                    <H4>{t("bargainPlatform.questions.fifth.question")}</H4>
                    <Paragraph>
                        {t("bargainPlatform.questions.fifth.answer")}
                    </Paragraph>
                </div>
                <div className={styles["bargain-platform__question-container"]}>
                    <H4>{t("bargainPlatform.questions.sixth.question")}</H4>
                    <Paragraph>
                        {t("bargainPlatform.questions.sixth.answer")}
                    </Paragraph>
                </div>
                <div className={styles["bargain-platform__question-container"]}>
                    <H4>{t("bargainPlatform.questions.seventh.question")}</H4>
                    <Paragraph>
                        {t("bargainPlatform.questions.seventh.answer")}
                    </Paragraph>
                </div>
                <div className={styles["bargain-platform__question-container"]}>
                    <H4>{t("bargainPlatform.questions.eighth.question")}</H4>
                    <Paragraph>
                        {t("bargainPlatform.questions.eighth.answer")}
                    </Paragraph>
                </div>
                <div className={styles["bargain-platform__question-container"]}>
                    <H4>{t("bargainPlatform.questions.ninth.question")}</H4>
                    <Paragraph>
                        {t("bargainPlatform.questions.ninth.answer")}
                    </Paragraph>
                </div>
                <div className={styles["bargain-platform__question-container"]}>
                    <H4>{t("bargainPlatform.questions.tenth.question")}</H4>
                    <Paragraph>
                        {t("bargainPlatform.questions.tenth.answer")}
                    </Paragraph>
                </div>
                <div className={styles["bargain-platform__question-container"]}>
                    <H4>{t("bargainPlatform.questions.eleventh.question")}</H4>
                    <Paragraph>
                        {t("bargainPlatform.questions.eleventh.answer")}
                    </Paragraph>
                </div>
                <div className={styles["bargain-platform__question-container"]}>
                    <H4>{t("bargainPlatform.questions.twelve.question")}</H4>
                    <Paragraph>
                        {t("bargainPlatform.questions.twelve.answer")}
                    </Paragraph>
                </div>
                <LinkWithScrolling to="/faq" className={styles["bargain-platform__link"]}>
                    {t("bargainPlatform.readMoreLink")}
                </LinkWithScrolling>
            </div>
        </CenterContainer>
    </section>
}