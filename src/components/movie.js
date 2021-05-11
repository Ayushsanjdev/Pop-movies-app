import React from 'react';

const Movie = ({ title, poster_path, vote_average, vote_count, overview }) => 
    <div className='movie'>
        <img src={"https://image.tmdb.org/t/p/w500" + poster_path } alt={ title } />
        <div>
          <div>{ title }</div>
          <div>{ vote_average } ⭐ <br/>({ vote_count }) </div> 
        </div>
        <div className='movie-overview'>
          { overview }
        </div>
    </div>

export default Movie;