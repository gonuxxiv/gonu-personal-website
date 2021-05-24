import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import Anchorlink from 'react-anchor-link-smooth-scroll';
import './Footer.css'; 

function Footer() {
    return (
        <div id="footer" className='footer-container'>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Anchorlink href="#main" className="social-logo">
                            Gonu K.
                        </Anchorlink>
                    </div>
                    <small id="email" className='website-rights'>Email: gonukimxxiv@gmail.com</small>
                    <small id="phoneNum" className='website-rights'>Phone: (778)-866-3657</small>
                    <div className="social-icons">
                        <a className="social-icon-link linkedin"
                            href="https://www.linkedin.com/in/gonu-kim-782a281aa/"
                            target="_blank"
                            aria-label="Linkedin"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
