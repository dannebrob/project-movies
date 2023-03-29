/* eslint-disable operator-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PopularList = ({ list, setList, loading, setLoading }) => {
  return (
    <section className="movies">
      {!loading &&
        list.results.map((movie) => (
          <Link to={`/movies/${movie.title}`} key={movie.id}>
            <p>{movie.title}</p>
          </Link>
        ))}
    </section>
  );
};
