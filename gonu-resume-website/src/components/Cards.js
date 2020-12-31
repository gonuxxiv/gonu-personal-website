import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards' id='portfolios'>
            <h1>Check out my works!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
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
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-1.jpg"
                            text="Interactive Hangman"
                            label="Javascript Game"
                            path="/aboutMe"
                        />
                        <CardItem 
                            src="images/img-2.jpg"
                            text="Zombiehunter"
                            label="Javascript Game"
                            path="/aboutMe"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
