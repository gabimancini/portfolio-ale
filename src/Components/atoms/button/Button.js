import classnames from "classnames";
import './button.css';

const Button = ({text, className, onClick, id})=>{
    const buttonClassName = classnames('button',{
        square: className === 'square',
        circle: className === 'circle',
        hamburger: className === 'hamburger',
        close: className === 'close',
    })
    return(
        <button className={buttonClassName} onClick={onClick} id={id}>{text}</button>
    )
}
export default Button;