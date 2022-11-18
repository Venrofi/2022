import './index.scss';
import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/venrofi_logo_transparent.png';
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 1050 && menuOpen) { // When resizing with Menu opened - hide Menu & allow scrolling
            setMenuOpen(false);
            document.body.style.overflow = 'auto';
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        if (size.width < 1050 && !menuOpen) { // When Menu is open - block scrolling
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'auto';
        }
        setMenuOpen((p) => !p); // Toggle Menu
    };
    
    return (
        <>
            <header className="page-header">
                <Link to="/" className="nav-logo"><img src={logo} alt="logo" /></Link>
                <nav className={`${"nav-desktop"} ${ menuOpen && size.width < 1050 ? "mobile-menu-open" : "" }`}>
                    <NavLink to="/about" className="nav-link" onClick={menuToggleHandler}>About</NavLink>
                    <NavLink to="/portfolio" className="nav-link" onClick={menuToggleHandler}>Portfolio</NavLink>
                    <NavLink to="/contact" className="nav-link" onClick={menuToggleHandler}>Contact</NavLink>
                </nav>
                <button className="nav-button">
                    {!menuOpen ? (<BiMenuAltRight onClick={menuToggleHandler} />) : (<AiOutlineClose onClick={menuToggleHandler} />)}
                </button>   
            </header>   
        </>     
    )
}

export default NavBar