import React, { useState } from 'react'
import { headerNav } from '../constants/index'


const Header = () => {
    const [show, setShow] = useState(false);
    const toggleMenu = () => {
        setShow(!show);
    }
    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <h1>
                        <a href="/">portfolio<em>react.js</em></a>
                    </h1>
                </div>
                <nav className={`header__nav ${show ? "show" : ""}`} aria-label='메인메뉴'>
                    <ul>
                        {headerNav.map((nav, idx) => {
                            return (
                                <li key={idx}>
                                    <a href={nav.url}>{nav.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div className="header__nav__mobile" id="headerToggle" aria-controls="primary-menu" aria-expanded={show ? "true" : "false"}
                    role="button" tabIndex="0"
                    onClick={toggleMenu}>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header
