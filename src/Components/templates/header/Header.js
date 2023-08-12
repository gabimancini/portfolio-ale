import Nav from "../../organisms/nav/Nav";
import Logo from "../../organisms/logo/Logo";
import './header.css';

const Header = () => {
    return (
        <header>
        <div className="container">
            <Logo />
            <Nav />
            </div>
        </header>
    )
}

export default Header;