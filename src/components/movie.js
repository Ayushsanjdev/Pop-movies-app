import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w500";

const setVoteColor = (vote) => {
  return vote>=8 ? "green" : vote>=5 ? "orange" : "red"
}

const Movie = ({ title, poster_path, vote_average, vote_count, overview }) => 
    <div className='movie'>
        <img src={poster_path ? IMG_API + poster_path : 'https://images.unsplash.com/photo-1608533371942-daebef51bc40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'} alt={ title } />
        <div>
          <div>{ title }</div>
          <div className={`color ${setVoteColor(vote_average)}`}>⭐ { vote_average }  <br/> ({ vote_count }) </div> 
        </div>
        <div className='movie-overview'>
          { overview }
        </div>
    </div>

export default Movie;