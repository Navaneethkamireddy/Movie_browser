// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import backgroundImage from './assets/movie-bg.png';

const Home = () => {
  return (
    <div
      className="home-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="home-content">
        <h1>Welcome to Movie Browser</h1>
        <p>
          Explore a wide collection of movies. Search by name and view detailed
          info like plot, cast, and more using a sleek Netflix-style interface.
        </p>
        <div className="home-buttons">
          <Link to="/register"><button>Register</button></Link>
          <Link to="/login"><button>Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
