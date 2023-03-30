/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable operator-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=04bc807ce2dc2489cded23df879f93ba&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      });
  }, []);

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <section className="movie-wrapper">
      {movieList.map((results) => (
        <Link key={results.id} to={`/details/${results.id}`}>
          <div className="movie-container">
            <img
              className="movie-poster"
              alt={results.title}
              src={`https://image.tmdb.org/t/p/w342/${results.poster_path}`}
            />
            {/* Jag tänker att movie-item kommer synas vid hover och vara ovanpå movie-image  */}
            <div className="movie-title">
              <h1 className="movie-title">{results.original_title}</h1>
              <p className="release-date">Released {results.release}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};