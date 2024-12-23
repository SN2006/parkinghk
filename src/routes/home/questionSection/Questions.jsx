import styles from "./Questions.module.css"
import {CenterContainer} from "../../../components/UI/containers/CenterContainer.jsx";
import {useTranslation} from "react-i18next";
import {QuestionCarousel} from "./QuestionCarousel.jsx";
import {QuestionCard} from "./QuestionCard.jsx";
import {ChatIcon} from "../../../components/UI/icons/ChatIcon.jsx";
import {SearchIcon} from "../../../components/UI/icons/SearchIcon.jsx";
import {HandIcon} from "../../../components/UI/icons/HandIcon.jsx";

export const Questions = () => {
    const {t, i18n} = useTranslation();
    return <section className={styles['questions']}>
        <CenterContainer>
            <div className={styles['questions-inner']}>
                <h2 className={styles['questions__title']}>{t('main.questions.title')}</h2>
                <div className={styles['questions__list--big']}>
                    <QuestionCarousel/>
                </div>
                <div className={styles['questions__list--small']}>
                    <div className={styles['questions__list-scroll']}>
                        <QuestionCard
                            icon={<ChatIcon/>}
                            title={t("main.questions.list.talk.title")}
                            text={t("main.questions.list.talk.text")}
                            readMore={t("main.questions.list.talk.readMore")}
                            linkTo="/d"
                            active
                            small
                        />
                        <QuestionCard
                            icon={<SearchIcon/>}
                            title={t("main.questions.list.search.title")}
                            text={t("main.questions.list.search.text")}
                            readMore={t("main.questions.list.search.readMore")}
                            linkTo="/d"
                            active
                            small
                        />
                        <QuestionCard
                            icon={<HandIcon/>}
                            title={t("main.questions.list.sold.title")}
                            text={t("main.questions.list.sold.text")}
                            readMore={t("main.questions.list.sold.readMore")}
                            linkTo="/d"
                            active
                            small
                        />
                    </div>
                </div>
            </div>
        </CenterContainer>
    </section>
}