import {Link} from 'react-router-dom';
import './Navigation.css';


export default function NavItem(props) {
    return (
        <li>
            <Link to={props.href}
                className="menu-link">
                {props.children}
            </Link>
        </li>
    )
}
