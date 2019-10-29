import React, {Component} from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free Cocktails",
                info: "Just because a cocktail is alcohol-free doesn't mean it can't be fun and delicious. These tasty alcohol-free mocktails bring all of the fun without the booze; they taste great, and they're perfect for parties and other occasions when you want to feel festive. Whether you're the designated driver, you're having a party and don't want to over serve, you're under-aged, or alcohol isn't your thing, these alcohol-free cocktails are certain to please."
            }, {
                icon: <FaHiking/>,
                title: "Seamless Hiking Experience",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eum repellat autem qui ad asperiores hic architecto voluptates, illo corporis nisi voluptatum sapiente accusantium placeat consequatur, error dolore, neque sint."
            }, {
                icon: <FaShuttleVan/>,
                title: "Free shuttles",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eum repellat autem qui ad asperiores hic architecto voluptates, illo corporis nisi voluptatum sapiente accusantium placeat consequatur, error dolore, neque sint."

            }, {
                icon: <FaBeer/>,
                title: "Strongest beer",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt eum repellat autem qui ad asperiores hic architecto voluptates, illo corporis nisi voluptatum sapiente accusantium placeat consequatur, error dolore, neque sint."

            }
        ]
    }
    render() {
        return (<section className="services">
            <Title title="Services"/>
            <div className="services-center"> {
                this.state.services.map((item, index) => {
                    return <article key={index}
                        className="service">
                        <span> {
                            item.icon
                        }</span>
                        <h6> {
                            item.title
                        }</h6>
                        <p> {
                            item.info
                        }</p>
                    </article>
            })
            } </div>


        </section>)
    }
}
export default Services
