import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import ThemeContext from './ThemeContext';
import light_logo from '../src/imgs/logo.png';
import dark_logo from '../src/imgs/dark_logo.png'
import '../src/css/Header.css';
import sun from '../src/imgs/sun.png';
import moon from '../src/imgs/moon.png';

export default function Header() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [background, setBackground] = useState(moon)
    const [logo, setLogo] = useState(dark_logo)

    const updateDisplay = () => {
        if (theme === 'white') {
            setTheme('black');
            setBackground(moon);
            setLogo(dark_logo)
        } else {
            setTheme('white');
            setBackground(sun)
            setLogo(light_logo)
        }
    };

    return (
        <div id="header" className={theme}>
            <Link to="/portfolio/">
                <img src={logo} id="logo" alt="Logo" />
            </Link>
            <div id="headerContainer">
                <NavLink to="/portfolio/projects" className={theme}>Projects</NavLink>
                <NavLink to="/portfolio/resume" className={theme}>Resume</NavLink>
                <NavLink to="/portfolio/contact" className={theme}>Contact</NavLink>
            </div>
            <img
                src={background}
                alt="Toggle Theme"
                id="display"
                onClick={updateDisplay}
            />
        </div>
    );
}
