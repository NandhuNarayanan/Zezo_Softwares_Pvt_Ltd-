import React from 'react';
import Latest_TvSeries from '../latest_tvSeries/Latest_TvSeries';
import Popular_Movies from '../popular_movies/Popular_Movies';
import Popular_show from '../popular_show/Pupolar_show'
import Poster from '../poster/Poster';
import Sports from '../best_in_sports/Sports';
import  Latest_Movies  from '../latest_movies/Latest_Movies';

function Movie_Cards() {
  return (
    <div className='bg-zinc-900'>
      <Popular_Movies/>
      <Latest_TvSeries/>
      <Popular_Movies/>
      <Popular_show/>
      <Poster/>
      <Sports/>
      <Popular_show/>
      <Latest_Movies/>
    </div>
  )
}

export default Movie_Cards