import React from 'react';
import '../App.css';
import FadeInSection from './FadeInSection';
import './Skills.css';
import SlideInLists from './SlideInLists';

function Skills() {
    return (
        <FadeInSection>
            <div className='skills-container' id='skills'>
                <h1>Skills</h1>
                {/* <div class="text"><span>S</span><span>k</span><span>i</span><span>l</span><span>l</span><span>s</span>
                </div> */}
                <div className="list-wrapper">
                    <ul className="list1">
                        <SlideInLists>
                        <li class="skill">Python</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">AWS</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">JavaScript</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">C</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">Java</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">Unity C#</li>
                        </SlideInLists>
                    </ul>
                    <ul className="list2">
                        <SlideInLists>
                        <li class="skill">WordPress</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">React.js</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">HTML/CSS</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">MySQL</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">Flutter</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">Android Studio</li> 
                        </SlideInLists>
                    </ul>
                </div>
            </div>
        </FadeInSection>
    )
}

export default Skills
