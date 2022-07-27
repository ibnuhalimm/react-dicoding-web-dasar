import { useState } from 'react';
import {Link} from 'react-router-dom';
import Burger from '../Icons/Burger';
import Close from '../Icons/Close';
import './Navigation.css';
import NavItem from './NavItem';


export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navigation">
            <div className="navbar-header">
                <div className="logo">
                    <Link to="/"
                        className="logo--link">
                        Web Dev
                    </Link>
                </div>
                <div className={`menu ${isOpen ? 'open' : ''}`}
                    id="__navigation-drawer">
                    <ul className="menu--list">
                        <NavItem href="/">
                            Home
                        </NavItem>
                        <NavItem href="/post">
                            Blog
                        </NavItem>
                        <NavItem href="#">
                            Tutorials
                        </NavItem>
                        <NavItem href="#">
                            Packages
                        </NavItem>
                    </ul>
                    <div className="search-nav">
                        <div className="search-nav--form">
                            <div className="search-nav--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="search-nav--icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input type="search"
                                name="q"
                                className="search-nav--input"
                                placeholder="Pencarian" />
                        </div>
                    </div>
                </div>
                <button className="btn-collapse"
                    onClick={ () => setIsOpen(!isOpen) }>
                    {isOpen
                        ? <Close className="btn-collapse--icon" />
                        : <Burger className="btn-collapse--icon" />
                    }
                </button>
            </div>
        </nav>
    )
}
