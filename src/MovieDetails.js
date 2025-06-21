// src/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css'; // optional styling

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=134ac805&plot=full`);
        const data = await res.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error || "Movie not found.");
        }
      } catch (err) {
        setError("Failed to fetch movie data.");
      }
    };

    fetchMovie();
  }, [id]);

  if (error) {
    return <div style={{ padding: '40px', color: 'red' }}>{error}</div>;
  }

  if (!movie) {
    return <div style={{ padding: '40px', color: 'white' }}>Loading...</div>;
  }

  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
        <div className="movie-info">
          <h2>{movie.Title}</h2>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Released:</strong> {movie.Released}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Language:</strong> {movie.Language}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
