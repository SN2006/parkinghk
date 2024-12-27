import styles from "./Video.module.css"
import {CenterContainer} from "../../../components/UI/containers/CenterContainer.jsx";
import {VideoButton} from "./VideoButton.jsx";

export const Video = () => {

    const onOpenHandler = () => {
    }

    return <section className={styles['video']}>
        <CenterContainer>
            <VideoButton onClick={onOpenHandler}/>
        </CenterContainer>
    </section>
}