import React from 'react';
import './MovieList.css'

function MovieList({ movies }) {
  return (
    <table className='movie-list'>
      <thead >
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr key={movie.title}>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MovieList;
