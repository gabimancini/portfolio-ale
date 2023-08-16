import classnames from "classnames";

const Button = ({text, className, onClick, id})=>{
    const buttonClassName = classnames('button',{
        hamburger: className === 'hamburger',
        close: className === 'close',
    })
    return(
        <button className={`${buttonClassName}  ${className}`} onClick={onClick} id={id}>{text}</button>
    )
}
export default Button;