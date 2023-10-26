import classNames from 'classnames';

const Links = ({href, variant, children, ...rest})=>{
    const linkClassName = classNames({
        nav: variant === 'nav',
        quote: variant === 'quote',
        website: variant === 'website',
        underlined: variant === 'underlined'
    })
    return <a href={href} variant={linkClassName} {...rest}>{children}</a>
}

export default Links;