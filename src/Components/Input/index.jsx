import React, { useId } from 'react';

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