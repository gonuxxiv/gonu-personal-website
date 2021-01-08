import React from 'react';
import '../App.css';
import './Education.css';
import {Button} from './Button';
import FadeInSection from './FadeInSection';

function Education() {
    return (
        <FadeInSection>
        <div className='educ-container' id='education'>
            <h1>Education</h1>
             {/* <div class="text"><span>E</span><span>d</span><span>u</span><span>c</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span><span>s</span></div> */}
            <div className="educ-list">
                <div className="my-educ">
                    <img src="images/bcit.png" alt="bcit logo" className="bcit-logo"></img>
                    <div>      
                        <ul className="educ-detail">            
                        <li>Studying Computer Systems Technology</li>
                        <li>Started in January 2020</li>
                        <li>Expected to graduate in Fall semester 2021</li>
                        </ul> 
                    </div>
                </div>
                <div className="my-educ">  
                <img src="images/sfu.png" alt="sfu logo" className="sfu-logo"></img>
                    <div>       
                    <ul className="educ-detail" id="sfu-detail">          
                        <li>Earned Bachelor of Fine Arts</li>
                        <li>Graduated in 2019</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </FadeInSection>
    )
}

export default Education
