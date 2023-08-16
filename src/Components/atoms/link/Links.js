import classNames from 'classnames';

const Links = ({href, variant, children})=>{
    const linkClassName = classNames({
        nav: variant === 'nav',
        quote: variant === 'quote',
        website: variant === 'website',
        underlined: variant === 'underlined'
    })
    return <a href={href} variant={linkClassName}>{children}</a>
}

export default Links;