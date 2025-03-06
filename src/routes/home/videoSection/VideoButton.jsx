import styles from "./VideoButton.module.css"
import {useTranslation} from "react-i18next";
import {LinkWithScrolling} from "../../../components/UI/links/LinkWithScrolling.jsx";

export const VideoButton = ({onClick}) => {
    const {t, i18n} = useTranslation()

    return <LinkWithScrolling to="/how-to-use" className={styles['video-button']} onClick={onClick}>
        <div className={styles['video-button__icon']}>
            <svg width="152" height="146" viewBox="0 0 152 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_0_1)">
                    <path d="M147.327 55.2002H5.3457V58.566H147.327V55.2002Z" fill="#C45A24"/>
                    <path
                        d="M5.34082 133.303C5.34082 135.897 7.26007 138 9.62932 138H143.246C145.613 138 147.534 135.897 147.534 133.303V58.7295H5.34082V133.303ZM63.7193 72.6824L102.478 98.9738L63.7193 125.263V72.6824Z"
                        fill="white"/>
                    <path d="M93.4986 26.1158L104.638 7.03613L86.2536 10.4855L75.1094 29.5674L93.4986 26.1158Z"
                          fill="white"/>
                    <path d="M54.8525 33.3632L65.9945 14.2812L47.6098 17.7306L36.4678 36.8126L54.8525 33.3632Z"
                          fill="white"/>
                    <path
                        d="M124.893 3.2355L113.753 22.3197L132.14 18.8725L143.129 0.0495474C142.715 -0.0112446 142.278 -0.0247539 141.833 0.0585536L124.893 3.23324V3.2355Z"
                        fill="white"/>
                    <path
                        d="M4.0311 30.5873L5.38335 42.6421L16.2126 40.6112L27.3591 21.5293L7.81785 25.1926C5.4441 25.6384 3.7476 28.0521 4.03335 30.5873H4.0311Z"
                        fill="white"/>
                    <path d="M36.4674 36.8134L47.6094 17.7314L27.3571 21.5321L16.2129 40.6117L36.4674 36.8134Z"
                          fill="#C45A24"/>
                    <path d="M75.1093 29.5673L86.2535 10.4854L65.9945 14.2815L54.8525 33.3634L75.1093 29.5673Z"
                          fill="#C45A24"/>
                    <path d="M113.753 22.3195L124.892 3.23535L104.638 7.03597L93.498 26.1156L113.753 22.3195Z"
                          fill="#C45A24"/>
                    <path
                        d="M143.129 0.0498047L132.138 18.8705L147.998 15.8962L146.641 3.84142C146.414 1.7835 144.945 0.30423 143.127 0.0498047H143.129Z"
                        fill="#C45A24"/>
                    <path d="M5.35645 55.4674H6.39145L16.1497 42.6426H5.38345H5.35645V55.4674Z" fill="white"/>
                    <path d="M44.916 55.4674L54.6788 42.6426H36.3458L26.583 55.4674H44.916Z" fill="white"/>
                    <path d="M147.552 48.3994L142.168 55.467H147.552V48.3994Z" fill="white"/>
                    <path d="M121.969 55.4674L131.734 42.6426H113.401L103.639 55.4674H121.969Z" fill="white"/>
                    <path d="M83.4479 55.4674L93.2106 42.6426H74.8776L65.1104 55.4674H83.4479Z" fill="white"/>
                    <path d="M6.3916 55.4674H26.5831L36.3458 42.6426H16.1499L6.3916 55.4674Z" fill="#C45A24"/>
                    <path d="M65.1098 55.4674L74.877 42.6426H54.6788L44.916 55.4674H65.1098Z" fill="#C45A24"/>
                    <path d="M103.639 55.4674L113.402 42.6426H93.21L83.4473 55.4674H103.639Z" fill="#C45A24"/>
                    <path d="M142.168 55.4674L147.552 48.3998V42.6426H131.735L121.97 55.4674H142.168Z" fill="#C45A24"/>
                    <rect x="35" y="68" width="86" height="59" fill="white"/>
                </g>
                <path
                    d="M98.818 101.457C100.573 100.267 100.573 97.6814 98.8181 96.4912L68.4038 75.86C66.4119 74.5088 63.7197 75.9357 63.7197 78.3427V119.603C63.7197 122.01 66.4118 123.437 68.4037 122.086L98.818 101.457Z"
                    fill="#C45A24"/>
                <defs>
                    <filter id="filter0_d_0_1" x="0.00195312" y="0" width="151.996" height="146"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
        <p className={styles['video-button__text']}>
            {t("main.video.button.text")}
        </p>
    </LinkWithScrolling>
}