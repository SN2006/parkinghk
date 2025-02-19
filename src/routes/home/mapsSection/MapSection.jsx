import styles from "./MapSection.module.css"
import {CenterContainer} from "../../../components/UI/containers/CenterContainer.jsx";
import {useTranslation} from "react-i18next";
import hkIslandImg from "../../../assets/icons/hkIslandIcon.png"
import kowloonImg from "../../../assets/icons/KowloonIcon.png"
import ntImg from "../../../assets/icons/ntIcon.png"

const MapItem = ({label, src}) => {
    return <button className={styles['map-item']}>
        <img src={src} alt={label} className={styles['map-item__img']}/>
        <p className={styles['map-item__label']}>{label}</p>
    </button>
}

export const MapSection = () => {
    const {t, i18n} = useTranslation();

    return <section className={styles['map-section']}>
        <CenterContainer>
            <div className={styles['map-section__inner']}>
                <h2 className={styles['map-section__title']}>
                    {t("main.maps.title")}
                </h2>
                <div className={styles['map-section__list']}>
                    <MapItem src={hkIslandImg} label={t("main.maps.labels.hkIsland")}/>
                    <MapItem src={kowloonImg} label={t("main.maps.labels.kowloon")}/>
                    <MapItem src={ntImg} label={t("main.maps.labels.nt")}/>
                </div>
            </div>
        </CenterContainer>
    </section>
}