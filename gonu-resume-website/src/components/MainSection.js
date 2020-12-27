import React from 'react';
import '../App.css';
import './MainSection.css';
import {Button} from './Button';

function MainSection() {
    return (
        <div className='main-container'>
            <video src='../videos/video-1.mp4' autoPlay loop muted />
            <h1>GONU RESUME</h1>
            <p>Currently enrolled in BCIT CST program</p>
            <div className="main-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    VIEW PORTFOLIO 
                </Button>
            </div>
        </div>
    )
}

export default MainSection
