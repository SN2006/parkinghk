import styles from "./VideoModalInner.module.css"

export const VideoModalInner = () => {
    return <div
        className={styles['modal']}
    >
        <iframe className={styles['modal__video']} src="https://www.youtube.com/embed/5rzv_UdVRM4?si=nMKoUni05hNZrwEe"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
}