import React from 'react';
import '../styles/index.css';
import Slider from './Slider';
import Navbar from './Navbar';

const Blog = (): React$Node =>{
    return (
        <>
        <Navbar />
        <Slider />
        <h1> Blog Page </h1>
      
        </>
    );
};

export default Blog;