import styles from "./QuestionCarousel.module.css"
import {useTranslation} from "react-i18next";
import {QuestionCard} from "./QuestionCard.jsx";
import {ChatIcon} from "../../../components/UI/icons/ChatIcon.jsx";
import {SearchIcon} from "../../../components/UI/icons/SearchIcon.jsx";
import {HandIcon} from "../../../components/UI/icons/HandIcon.jsx";
import {useState} from "react";
import {ArrowButton} from "../../../components/UI/buttons/arrow/ArrowButton.jsx";
import {PointButton} from "../../../components/UI/buttons/point/PointButton.jsx";

const states = [
    [
        {left: "auto", right: "auto", active: true},
        {left: "35px", right: "auto", active: false},
        {left: "auto", right: "35px", active: false},
    ],
    [
        {left: "35px", right: "auto", active: false},
        {left: "auto", right: "35px", active: false},
        {left: "auto", right: "auto", active: true},
    ],
    [
        {left: "auto", right: "35px", active: false},
        {left: "auto", right: "auto", active: true},
        {left: "35px", right: "auto", active: false},
    ],
]

export const QuestionCarousel = () => {
    const {t, i18n} = useTranslation();
    const [state, setState] = useState(0);

    const onLeftArrowClick = () => {
        if (state === 0) {
            setState(2);
        }else {
            setState(prevState => prevState - 1);
        }
    }

    const onRightArrowClick = () => {
        if (state === 2) {
            setState(0);
        }else {
            setState(prevState => prevState + 1);
        }
    }

    return <div
        className={styles['question-carousel']}
    >
        <div className={styles['question-carousel__list']}>
            <QuestionCard
                icon={<ChatIcon/>}
                title={t("main.questions.list.talk.title")}
                text={t("main.questions.list.talk.text")}
                readMore={t("main.questions.list.talk.readMore")}
                active={states[state][0].active}
                left={states[state][0].left}
                right={states[state][0].right}
                onClick={() => setState(0)}
                linkTo="/d"
            />
            <QuestionCard
                icon={<SearchIcon/>}
                title={t("main.questions.list.search.title")}
                text={t("main.questions.list.search.text")}
                readMore={t("main.questions.list.search.readMore")}
                active={states[state][1].active}
                left={states[state][1].left}
                right={states[state][1].right}
                onClick={() => setState(2)}
                linkTo="/d"
            />
            <QuestionCard
                icon={<HandIcon/>}
                title={t("main.questions.list.sold.title")}
                text={t("main.questions.list.sold.text")}
                readMore={t("main.questions.list.sold.readMore")}
                active={states[state][2].active}
                left={states[state][2].left}
                right={states[state][2].right}
                onClick={() => setState(1)}
                linkTo="/d"
            />
        </div>
        <div className={styles['question-carousel__control']}>
            <ArrowButton
                left
                side={34}
                color="black"
                onClick={onLeftArrowClick}
            />
            <div className={styles['question-carousel__control-points']}>
                {[0, 1, 2].map((key) => <PointButton
                    side={10}
                    key={key}
                    color={state === key ? "rgba(27, 27, 27, 1)" : "rgba(217, 217, 217, 1)"}
                    onClick={() => {setState(key)}}
                />)}
            </div>
            <ArrowButton
                side={34}
                color="black"
                onClick={onRightArrowClick}
            />
        </div>
    </div>
}