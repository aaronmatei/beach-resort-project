import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
    return (<React.Fragment>


        <Hero>
            <Banner subtitle="awesome rooms starting at $288" title="luxurious rooms">
                <Link className="btn-primary" to="/rooms">view rooms</Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
    </React.Fragment>)
}

export default Home
