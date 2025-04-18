import React from 'react'
import Header from "../components/Layout/Header";
import Hero from '../components/Route/Hero/Hero';
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import Events from "../components/Events/Events";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import Popup from '../components/Layout/Popup';
import Testimonial from '../components/Layout/Testimonial';


const HomePage = () => {
    return (
        <div>
            <Header activeHeading={1} />
            <Hero />
            <Categories />
            <BestDeals />
            <Events />
            <FeaturedProduct />
            {/* <Sponsored /> */}
            <Testimonial />
            <Popup />
            <Footer />
        </div>
    )
}

export default HomePage