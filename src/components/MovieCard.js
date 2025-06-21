// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="border p-2 shadow rounded">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-lg mt-2">{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;