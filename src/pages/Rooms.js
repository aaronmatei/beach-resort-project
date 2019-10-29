import React from 'react'
import Hero from '../components/Hero';

import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

const Rooms = () => {
    return (<div>
        <Hero hero="roomsHero">
            <Banner subtitle="" title="Our Rooms">
                <Link className="btn-primary" to="/">Return Home</Link>
            </Banner>


        </Hero>
    </div>)
}

export default Rooms