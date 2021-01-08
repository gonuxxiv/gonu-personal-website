import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import FadeInSection from './FadeInSection';


function ArtisticPortfolios() {
    return (
        <FadeInSection>
        <div className='cards2' id='portfolios'>
            <h1>Artistic Portfolios</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                <FadeInSection>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/four-seasons.png"
                            text="Four Seasons After 37 Cycles"
                            label="Composition"
                            path="https://vimeo.com/352511964"
                        />
                        <CardItem 
                            src="images/crossing-mtn.jpg"
                            text="Crossing Mountains & Seas"
                            label="Sound design/operation"
                            path="https://www.orchidensemble.com/crossing-mountains-seas/"
                        />
                    </ul>
                </FadeInSection>
                <FadeInSection>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/form2019.png"
                            text="F-O-R-M Film Festival 2019"
                            label="Composition"
                            path="https://vimeo.com/354448968"
                        />
                        <CardItem 
                            src="images/form2020.png"
                            text="F-O-R-M Online Film Festival 2020"
                            label="Composition"
                            path="https://vimeo.com/449383259"
                        />
                    </ul>
                </FadeInSection>
                </div>
            </div>
        </div>
        </FadeInSection>
    )
}

export default ArtisticPortfolios