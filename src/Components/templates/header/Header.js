import Nav from "../../organisms/nav/Nav";
import Logo from "../../organisms/logo/Logo";
import './header.css';

const Header = () => {
    return (
        <header>
        <div className="container p-y-40 p-x-20">
            <Logo />
            <Nav />
            </div>
        </header>
    )
}

export default Header;