import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
const Error = () => {
    return (<div>
        <Hero>
            <Banner subtitle="Page Not Found" title="404">

                <Link className="btn-primary" to="/">Return Home</Link>
            </Banner>


        </Hero>

    </div>);
}

export default Error;
