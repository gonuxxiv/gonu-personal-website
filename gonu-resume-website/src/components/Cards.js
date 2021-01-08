import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import FadeInSection from './FadeInSection';

function Cards() {
    return (
        <FadeInSection>
        <div className='cards' id='portfolios'>
            <h1>Development Portfolios</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                <FadeInSection>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/robat.png"
                            text="RoBat: the Batting Game"
                            label="Mobile Game App"
                            path="https://play.google.com/store/apps/details?id=com.ESGK.RoBatTheBattingGame"
                        />
                        <CardItem 
                            src="images/help.jpg"
                            text="Help!"
                            label="Web Application"
                            path="https://helpservices.herokuapp.com/"
                        />
                    </ul>
                </FadeInSection>
                <FadeInSection>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/interactive-hangman.png"
                            text="Interactive Hangman"
                            label="Javascript Game"
                            path="https://interactivehangman.z9.web.core.windows.net/html/index.html"
                        />
                        <CardItem 
                            src="images/zombie-hunter.png"
                            text="Zombiehunter"
                            label="Javascript Game"
                            path="https://zombiehunter.z22.web.core.windows.net/"
                        />
                    </ul>
                </FadeInSection>
                </div>
            </div>
        </div>
        </FadeInSection>
    )
}

export default Cards
