import React, { useId } from 'react';
import PropTypes from "prop-types";


const Input  = React.forwardRef(function Input({
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();
    return (
        <>
            <input id={id} ref={ref} type={type} className={className} {...props} />
        </>
    )
})

export default Input

Input.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string
}