import styles from "./FAQ.module.css"
import {useTranslation} from "react-i18next";
import {CenterContainer} from "../../components/UI/containers/CenterContainer.jsx";
import {H2} from "../../components/UI/titles/H2.jsx";
import {H4} from "../../components/UI/titles/H4.jsx";
import {Paragraph} from "../../components/UI/titles/Paragraph.jsx";
import {useEffect} from "react";

export const FAQ = () => {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        document.title = "Frequently Asked Questions And Answers";
    }, []);

    return <main>
        <section className={styles.faq}>
            <CenterContainer>
                <div className={styles['faq-inner']}>
                    <H2>{t("faq.title")}</H2>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.first.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.first.answer")}
                        </Paragraph>
                    </div>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.second.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.second.answer")}
                        </Paragraph>
                    </div>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.third.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.third.answer")}
                        </Paragraph>
                    </div>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.fourth.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.fourth.answer")}
                        </Paragraph>
                    </div>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.fifth.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.fifth.answer")}
                        </Paragraph>
                    </div>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.sixth.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.sixth.answer")}
                        </Paragraph>
                    </div>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.seventh.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.seventh.answer")}
                        </Paragraph>
                    </div>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.eighth.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.eighth.answer")}
                        </Paragraph>
                    </div>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.ninth.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.ninth.answer")}
                        </Paragraph>
                    </div>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.tenth.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.tenth.answer")}
                        </Paragraph>
                    </div>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.eleventh.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.eleventh.answer")}
                        </Paragraph>
                    </div>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.twelve.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.twelve.answer")}
                        </Paragraph>
                    </div>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.thirteenth.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.thirteenth.answer")}
                        </Paragraph>
                    </div>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.fourteenth.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.fourteenth.answer")}
                        </Paragraph>
                    </div>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.fifteenth.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.fifteenth.answer")}
                        </Paragraph>
                    </div>
                    <div className={styles['faq__content']}>
                        <H4>{t("faq.questions.sixteenth.question")}</H4>
                        <Paragraph>
                            {t("faq.questions.sixteenth.answer")}
                        </Paragraph>
                    </div>
                </div>
            </CenterContainer>
        </section>
    </main>
}