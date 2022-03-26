import React from 'react';
import ImageSlider from "../components/ImageSlider";
import Products from "../page/Products"
const Home = () => {
    return (
        <div className='grid wide'>
            <ImageSlider/>   
            <Products/>
        </div>
        
    );
};

export default Home;