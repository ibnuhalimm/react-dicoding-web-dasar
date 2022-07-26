import './Navigation.css';


export default function NavItem(props) {
    return (
        <li>
            <a href={props.href}
                className="menu--link">
                {props.children}
            </a>
        </li>
    )
}
