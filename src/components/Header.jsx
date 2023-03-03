export const Header = ({ className, id, children }) => {
    return <>
        {children}
        <p id={id} className={className}>I am Header</p>
    </>

}