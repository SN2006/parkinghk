import logoLabel from "../../../assets/icons/logo-label.png"
import logoImage from "../../../assets/icons/logo-image.png"

const LogoLabel = ({width, height}) => {
    return <img src={logoLabel} alt="logo" width={width} height={height}/>
}

export const LogoImage = ({width, height}) => {
    return <img src={logoImage} alt="logo" width={width} height={height}/>
}

export const Logo = ({gap, labelWidth, labelHeight, imageWidth, imageHeight}) => {
    return <div style={{
        display: 'flex',
        gap: gap,
        alignItems: 'center',
    }}>
        <LogoImage width={imageWidth} height={imageHeight}/>
        <LogoLabel width={labelWidth} height={labelHeight}/>
    </div>
}