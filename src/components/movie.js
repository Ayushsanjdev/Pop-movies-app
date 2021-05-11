import React from 'react';

const Movie = ({ title, poster_path, vote_average, vote_count }) => 
    <div className='movie'>
        <img src={"https://image.tmdb.org/t/p/w500" + poster_path } alt={title} />
        <div>
            { vote_average }
        </div>
        <div>
            { vote_count }
        </div>
    </div>;

export default Movie;