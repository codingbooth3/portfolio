import '../src/css/Footer.css'

import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import ThemeContext from './ThemeContext'

export default function Footer() {

    const {theme} = useContext(ThemeContext)

  return (
    <div id="footerContainer">
        <NavLink to="/portfolio/projects" className={theme}>Projects</NavLink>
        <NavLink to="/portfolio/resume" className={theme}>Resume</NavLink>
        <NavLink to="/portfolio/contact" className={theme}>Contact</NavLink>
    </div>
  )
}
