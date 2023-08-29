import Nav from "../../organisms/nav/Nav";
import Logo from "../../organisms/logo/Logo";
import './header.css';

const Header = () => {
    return (
        <header>
        <div className="container p-y-20 padding-md-40">
            <Logo />
            <Nav />
            </div>
        </header>
    )
}

export default Header;