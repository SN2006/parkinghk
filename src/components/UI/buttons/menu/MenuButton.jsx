import {motion} from "motion/react";

export const MenuButton = ({color, isOpen, onClick}) => {
    return <button style={{
        width: 30,
        height: 30,
    }} className={"empty-btn"} onClick={onClick}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20" height="20"
            viewBox="0 0 30 30"
            fill="none"
        >
            <motion.path
                transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                }}
                d="M0,1.15C0,.52.35,0,.79,0H29.21c.44,0,.79.52.79,1.15s-.35,1.16-.79,1.16H.79C.35,2.31,0,1.79,0,1.15Zm29.21,12.7H.79C.35,13.85,0,14.36,0,15s.35,1.15.79,1.15H29.21c.44,0,.79-.51.79-1.15S29.65,13.85,29.21,13.85Zm0,13.84H.79c-.44,0-.79.52-.79,1.16S.35,30,.79,30H29.21c.44,0,.79-.52.79-1.15S29.65,27.69,29.21,27.69Z"
                fill={color}
                animate={isOpen ? {scale: 0} : {scale: 1}}
            />
            <motion.path
                transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                }}
                d="M29.66,28a1.15,1.15,0,0,1,0,1.63,1.15,1.15,0,0,1-1.63,0l-13-13-13,13a1.13,1.13,0,0,1-.82.34,1.12,1.12,0,0,1-.81-.34A1.15,1.15,0,0,1,.34,28l13-13L.34,2A1.15,1.15,0,0,1,2,.34l13,13,13-13A1.15,1.15,0,0,1,29.66,2l-13,13Z"
                fill={color}
                animate={isOpen ? {scale: 1} : {scale: 0}}
            />
        </svg>
    </button>
}