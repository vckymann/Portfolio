import PropTypes from "prop-types";

const Button = ({
    children,
    className = "",
    ...restProps
}) => {
    return (
        <button className={`${className} flex justify-center items-center cursor-pointer text-center`}
        {...restProps}>
            {children}
        </button>
    )
}

export default Button

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}
