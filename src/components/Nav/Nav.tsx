import './Nav.scss';
import NavItem from '../NavItem/NavItem';

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h1>Logo</h1>
            </div>
            <div className="navbar__spacer"></div>
            <div className="navbar__spacer"></div>
            <div className="navbar__items">
                <NavItem name="Home" path="" />
                <NavItem name="About" path="" />
                <NavItem name="Contact" path="" />
                <NavItem name="Blog" path="" />
            </div>
            
        </nav>
    );
}

export default Nav;
