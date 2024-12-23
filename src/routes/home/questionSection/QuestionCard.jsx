import styles from "./QuestionCard.module.css"
import { motion } from "motion/react"
import {Link} from "react-router";

export const QuestionCard = ({active, title, text, readMore, icon, left, right, onClick, linkTo, small}) => {

    const onClickHandler = () => {
        onClick();
    }

    return <motion.div
        onClick={onClickHandler}
        className={styles['question-card']}
        transition={{
            duration: 0.6,
            ease: "easeInOut"
        }}
        animate={active ? {
            background: small ? "white" : 'rgba(245, 245, 245, 1)',
            scale: 1,
            translateX: small ? "0" : "-50%",
            left: small ? "auto" : "50%",
            right: "auto",
            cursor: "auto",
            zIndex: 3,
        } : {
            background: 'rgba(196, 196, 196, 1)',
            scale: 0.9,
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            translateX: "0",
            left: left,
            right: right,
            cursor: "pointer",
            zIndex: 1,
        }}
    >
        <div className={styles['question-card__icon']}>
            {icon}
        </div>
        <h4 className={styles['question-card__title']}>{title}</h4>
        <p className={styles['question-card__text']}>{text}</p>
        <Link className={styles['question-card__more']} to={linkTo}>{readMore}</Link>
    </motion.div>
}