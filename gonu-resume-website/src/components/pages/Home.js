import React from 'react'
import '../../App.css';
import MainSection from '../MainSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Education from '../Education';
import Skills from '../Skills';
import ArtisticPortfolios from '../ArtisticPortfolios';

function Home () {
    return (
        <>
            <MainSection/>
            <Education />
            <Skills />
            <Cards />
            <ArtisticPortfolios />
            <Footer />
        </>
    )
}

export default Home;