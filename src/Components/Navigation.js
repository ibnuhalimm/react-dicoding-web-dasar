import NavItem from './NavItem';

export default function Navigation() {
    return (
        <header>
            <nav className="navigation">
                <div className="navbar-header">
                    <div className="logo">
                        <a href="/"
                            className="logo--link">
                            Web Dev
                        </a>
                    </div>
                    <div className="menu"
                        id="__navigation-drawer">
                        <ul className="menu--list">
                            <NavItem href="/">
                                Home
                            </NavItem>
                            <NavItem href="/">
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
                    <button className="btn-collapse" id="__button-burger">
                        <svg xmlns="http://www.w3.org/2000/svg" className="btn-collapse--icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}
