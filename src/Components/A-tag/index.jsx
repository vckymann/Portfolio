
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