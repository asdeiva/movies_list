import React from 'react';
import './GenreFilter.css'

function GenreFilter({ genres, onGenreSelect }) {
  return (
    <div className='container'>
        <h2>Filter by Genere</h2>
        <div className="genre-filter">
      {genres.map(genre => (
        <button className='btn' key={genre} onClick={() => onGenreSelect(genre)}>{genre}</button>
      ))}
      </div>
    </div>
  );
}

export default GenreFilter;
