import Links from "../../atoms/link/Links";
const List = ({ href, variant, text }) => {
    return (
        <li><Links href={href} variant={variant} children={text} /></li>
    )
}

export default List;