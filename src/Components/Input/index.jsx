import React, { useId } from 'react';

const Input  = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();
    return (
        <>
            <input id={id} ref={ref} type={type} className={className} {...props} placeholder={label} />
        </>
    )
})

export default Input