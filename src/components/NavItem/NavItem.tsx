import './NavItem.scss';
import { Link } from 'react-router-dom';

type NavItemProps = {
    name: string;
    path: string;
}

const NavItem = ({ name, path }: NavItemProps) => {

    return (
        <div className="nav-item">
            <Link to={`/${path}`} className="nav-item__link">
                <p>{name}</p>
            </Link>
        </div>
    );
}

export default NavItem;