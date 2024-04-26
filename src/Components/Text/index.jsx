const Text = ({children, className, as ,...restProps}) => {
    const Component = as || 'p';
    
    return (
        <Component className={`font-poppins ${className}`} {...restProps}>{children}</Component>
    )
}

export default Text;