import React from 'react';
import Table  from '../components/Table';

import Navbar from '../components/Navbar';
import Slider from '../components/Slider';


const Home = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <Table />
    </div>
  )
}

export default Home