import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css'; 

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className="footer-subscription-heading">
                    Footer Section
                </p>
                <p className="footer-subscription-text">
                    Another footer
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle='btn--outline'>Send</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Me</h2>
                        <Link to='/aboutMe'>Click here</Link>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Linkedin</h2>
                        <Link to='/aboutMe'>Click here</Link>
                        <Link to='/'>Home</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Me</h2>
                        <Link to='/aboutMe'>Click here</Link>
                        <Link to='/'>Home</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            Gonu Kim
                        </Link>
                    </div>
                    <small className='website-rights'> Gonu Kim © 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link linkedin"
                            to="/"
                            target="_blank"
                            aria-label="Linkedin"
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
