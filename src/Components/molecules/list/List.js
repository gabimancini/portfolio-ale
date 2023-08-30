import Links from "../../atoms/link/Links";
const List = ({ href, variant, text,className }) => {
    return (
        <li className={className}><Links href={href} variant={variant} children={text}/></li>
    )
}

export default List;