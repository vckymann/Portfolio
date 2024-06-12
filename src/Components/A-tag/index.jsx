import PropTypes from "prop-types";
const A = ({
    href,
    children,
    className,
    ...restProps
}) => {

    return (
        <a href={href} className={`${className}`} {...restProps}>{children}</a>
    )
}

export default A;

A.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}