import React from 'react'
import '../../App.css';
import MainSection from '../MainSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Education from '../Education';
import Skills from '../Skills';

function Home () {
    return (
        <>
            <MainSection/>
            <Education />
            <Skills />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;