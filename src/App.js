import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=d52eaf3acfab66733baf520a2f96042a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

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
      <h1>Popcorn Time</h1>
      {movies && movies.length > 0 && movies.map((movie) => 
        <Movie key={movie.id} {...movie} />
      )}
    </div>
  );
}

export default App;
