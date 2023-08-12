import classNames from 'classnames';
import './link.css';

const Links = ({href, variant, children})=>{
    const linkClassName = classNames({
        nav: variant === 'nav',
        figma: variant === 'figma',
        website: variant === 'website',
        underlined: variant === 'underlined'
    })
    return <a href={href} variant={linkClassName}>{children}</a>
}

export default Links;