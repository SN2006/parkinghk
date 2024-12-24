import styles from "./Modal.module.css"
import {createPortal} from "react-dom";
import {motion} from "motion/react";
import {useState} from "react";

const backdropVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

const modalVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
    }
}

const BachDrop = ({onHideModal, isOpen}) => {

    return <motion.div
        variants={backdropVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className={styles.backdrop}
        onClick={onHideModal}
        transition={{
            ease: "easeInOut",
            duration: 0.8,
        }}
    ></motion.div>
}

const ModalWrapper = ({children, isOpen}) => {
    return <motion.div
        variants={modalVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        transition={{
            ease: "easeInOut",
            duration: 0.4,
        }}>
        {children}
    </motion.div>
}

const portalElement = document.getElementById("overlays");

export const Modal = ({onHideModal, children}) => {
    const [isOpen, setIsOpen] = useState(true);

    const onClickHandler = () => {
        setIsOpen(false);
        setTimeout(() => onHideModal(), 800);
    }
    return <>
        {createPortal(<BachDrop isOpen={isOpen} onHideModal={onClickHandler}/>, portalElement)}
        {createPortal(<ModalWrapper isOpen={isOpen}>{children}</ModalWrapper> ,portalElement)}
    </>
}