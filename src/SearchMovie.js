import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchMovie.css';

const SearchMovie = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=134ac805`);
    const data = await res.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <h2>Search Movies</h2>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter movie title..."
        />
        <button onClick={handleSearch}>Search</button>
        <div className="movie-list">
          {movies.map(movie => (
            <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
  <img src={movie.Poster} alt={movie.Title} />
</Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
