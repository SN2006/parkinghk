import styles from "./Video.module.css"
import {CenterContainer} from "../../../components/UI/containers/CenterContainer.jsx";
import {VideoButton} from "./VideoButton.jsx";
import {useState} from "react";
import {Modal} from "../../../components/UI/modal/Modal.jsx";
import {VideoModalInner} from "./VideoModalInner.jsx";

export const Video = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenHandler = () => {
        setIsOpen(true);
    }

    const onCloseHandler = () => {
        setIsOpen(false);
    }

    return <section className={styles['video']}>
        <CenterContainer>
            <VideoButton onClick={onOpenHandler}/>
            {isOpen && <Modal onHideModal={onCloseHandler}>
                <VideoModalInner />
            </Modal>}
        </CenterContainer>
    </section>
}