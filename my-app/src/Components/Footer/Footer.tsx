import "./Footer.css";
import React from "react";

const Footer: React.FC = () => {

    const [menuOpen, setMenuOpen] = React.useState(false);
    const menuRef = React.useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    }

    React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


    return(
        <div className="Footer">
            <p>&copy; {new Date().getFullYear()} - Louis Au</p>
            <p>Designed and Created by Louis Au</p>
            <div className="inspire-container" ref={menuRef}>
                <div className="inspireBTN" onClick={toggleMenu}><p>Inspired By</p></div>
                <div className={`inspireList ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li>
                            <a href="https://btamada.github.io/">
                                <p>Bryan Tamada</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.nickzuber.com/">
                                <p>Nick Zuber</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://slim.computer/">
                                <p>Slim Lim</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;