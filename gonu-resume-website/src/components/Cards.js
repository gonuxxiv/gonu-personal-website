import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my resume!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-1.jpg"
                            text="Hello!"
                            label="Resume"
                            path="/aboutMe"
                        />
                        <CardItem 
                            src="images/img-2.jpg"
                            text="Hello!"
                            label="Resume"
                            path="/aboutMe"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-1.jpg"
                            text="Hello!"
                            label="Resume"
                            path="/aboutMe"
                        />
                        <CardItem 
                            src="images/img-2.jpg"
                            text="Hello!"
                            label="Resume"
                            path="/aboutMe"
                        />
                        <CardItem 
                            src="images/img-1.jpg"
                            text="Hello!"
                            label="Resume"
                            path="/aboutMe"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
