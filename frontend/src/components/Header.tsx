import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CartIcon, Logo, SearchIcon, UserIcon, WishlistIcon } from './icons';

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        <Link to="/" className="header__logo">
                            <img src={Logo} alt="" />
                        </Link>
                        <div className="button-mobile"><button>=</button></div>
                        <nav className="main-menu">
                            <ul className="main-menu__list">
                                <li className="main-menu__item">
                                    <NavLink to="/" className="main-menu__link">Home</NavLink>
                                </li>
                                <li className="main-menu__item">
                                    <NavLink to="/shop" className="main-menu__link">Shop</NavLink>
                                </li>
                                <li className="main-menu__item">
                                    <NavLink to="/about" className="main-menu__link">About</NavLink>
                                </li>
                                <li className="main-menu__item">
                                    <NavLink to="/contact" className="main-menu__link">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="header-items">
                            <div className="header-item-user">
                                <span>
                                    <img src={UserIcon} />
                                </span>
                            </div>
                            <div className="header-item-user">
                                <span>
                                    <img src={SearchIcon} />
                                </span>
                            </div>
                            <div className="header-item-user">
                                <span>
                                    <img src={WishlistIcon} />
                                </span>
                            </div>
                            <div className="header-item-user">
                                <span>
                                    <img src={CartIcon} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header