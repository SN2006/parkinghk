import {Link} from "react-router";

export const LinkWithScrolling = (props) => {
    const onClickHandler = () => {
        props.onClick && props.onClick();
        window.scrollTo(0, 0);
    }

    return <Link {...props} onClick={onClickHandler}>
        {props.children}
    </Link>
}