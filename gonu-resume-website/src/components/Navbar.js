import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Anchorlink from 'react-anchor-link-smooth-scroll';
import Headroom from 'react-headroom';
 
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <Headroom>
            <nav className="navbar">
                <div className="navbar-container">
                    <Anchorlink href="#main" className="navbar-logo" onClick={closeMobileMenu}>
                        Gonu K.
                    </Anchorlink>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Anchorlink href="#education" class='nav-links' onClick={closeMobileMenu}>
                                Education
                            </Anchorlink>
                        </li>
                        <li className='nav-item'>
                            <Anchorlink href="#skills" class='nav-links' onClick={closeMobileMenu}>
                                Skills
                            </Anchorlink>
                        </li>
                        <li className='nav-item'>
                            <Anchorlink href="#portfolios" class='nav-links' onClick={closeMobileMenu}>
                                Portfolios
                            </Anchorlink>
                        </li>
                        <li className='nav-item'>
                            <Anchorlink href="#footer" class='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Anchorlink>
                        </li>
                    </ul>
                </div>
            </nav>       
        </Headroom>
    )
}

export default Navbar
