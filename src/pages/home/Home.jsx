import React from 'react';
import Banner from '../../components/banner/Banner';
import Navbar from '../../components/navbar/Navbar';
import Movie_Cards from "../../components/movies_cards/Movie_Cards";
import Submit_Area from '../../components/submit_area/Submit_Area';
import Footer from '../../components/footer_area/Footer';


function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Movie_Cards/>
    <Submit_Area/>
    <Footer/>
    </>
  )
}

export default Home