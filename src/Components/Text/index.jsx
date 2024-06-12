import PropTypes from "prop-types";

const Text = ({children, className, as ,...restProps}) => {
    const Component = as || 'p';
    
    return (
        <Component className={`font-poppins ${className}`} {...restProps}>{children}</Component>
    )
}

export default Text;

Text.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    as: PropTypes.string
}