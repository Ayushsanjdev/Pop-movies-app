import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/movie';

const MOVIES_API = "https://api.themoviedb.org/3/discover/movie?api_key=d52eaf3acfab66733baf520a2f96042a&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=d52eaf3acfab66733baf520a2f96042a&language=en-US&page=1&include_adult=false&query=";


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getMoviesApi = (API) => {
      fetch(API)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      });
    }
  useEffect(() => {
    getMoviesApi(MOVIES_API)
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(searchTerm) {
      getMoviesApi(SEARCH_API + searchTerm);setSearchTerm('');
    }
  }
    
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className='App'>
      <header>
        <h1>
          Popcorn Time 
          <img src="https://img.icons8.com/cotton/64/000000/streaming-movies.png" alt='movie-icon'/>
        </h1>
        <form onSubmit={handleOnSubmit}>
          <input type="search" 
          className="search-input" 
          placeholder="Search more..."
          value={searchTerm}
          onChange={handleOnChange} />
        </form>
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
