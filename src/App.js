import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=d52eaf3acfab66733baf520a2f96042a&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setMovies(data.results);
    });
  }, [])

  return (
    <div className='App'>
      <header>
        <h1>
          Popcorn Time 
          <img src="https://img.icons8.com/cotton/64/000000/streaming-movies.png" alt='movie-icon'/>
        </h1>
      </header>
      <hr />
      <section>
        {movies && movies.length > 0 && movies.map((movie) => 
        <Movie key={movie.id} {...movie} />
        )}
      </section>
    </div>
  );
}

export default App;
