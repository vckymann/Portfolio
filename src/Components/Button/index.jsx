
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
