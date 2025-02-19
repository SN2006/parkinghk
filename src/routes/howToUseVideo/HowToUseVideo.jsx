import styles from "./HowToUseVideo.module.css"
import {useTranslation} from "react-i18next";
import {H2} from "../../components/UI/titles/H2.jsx";

export const HowToUseVideo = () => {
    const [t, i18n] = useTranslation();

    return <main>
        <section className={styles['how-to-use-video-section']}>
            <H2>
                {t("howToUse.title")}
            </H2>
            <iframe width="349" height="187" src="https://www.youtube.com/embed/5rzv_UdVRM4?si=F28oVboCHBQ7WYrg"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
        </section>
    </main>
}