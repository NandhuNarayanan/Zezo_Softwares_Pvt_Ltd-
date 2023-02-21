import React from 'react'
import Latest_TvSeries from '../latest_tvSeries/Latest_TvSeries'
import Popular_Movies from '../popular_movies/Popular_Movies'

function Movie_Cards() {
  return (
    <div className='bg-zinc-900'>
      <Popular_Movies/>
      <Latest_TvSeries/>
    </div>
  )
}

export default Movie_Cards