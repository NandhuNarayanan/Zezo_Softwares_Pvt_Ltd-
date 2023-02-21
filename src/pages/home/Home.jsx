import React from 'react';
import Banner from '../../components/banner/Banner';
import Navbar from '../../components/navbar/Navbar';
import Movie_Cards from "../../components/movies_cards/Movie_Cards";


function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Movie_Cards/>

    </>
  )
}

export default Home