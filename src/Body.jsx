import "./css/Navbar.css"

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="about">
                <a href="#about">
                    About
                </a>
            </div>
            <div className="portfolio">
                <a href="portfolio.html">
                    Portfolio
                </a>
            </div>
            <div className="contact">
                <a href="contact.html">
                    Contact
                </a>
            </div>
        </div>
     );
}
 
export default Navbar;