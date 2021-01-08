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
                        <li class="skill">JavaScript</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">C</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">Java</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">C#</li>
                        </SlideInLists>
                    </ul>
                    <ul className="list2">
                        <SlideInLists>
                        <li class="skill">React.js</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">HTML/CSS</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">SQL</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">Git Workflow</li>
                        </SlideInLists>
                        <SlideInLists>
                        <li class="skill">Native Korean speaker</li> 
                        </SlideInLists>
                    </ul>
                </div>
            </div>
        </FadeInSection>
    )
}

export default Skills
