import React from 'react';

function GenreFilter({ genres, onGenreSelect }) {
  return (
    <div className="genre-filter">
       <h2>Filter by Genere</h2> 
      {genres.map(genre => (
        <button className='btn' key={genre} onClick={() => onGenreSelect(genre)}>{genre}</button>
      ))}
    </div>
  );
}

export default GenreFilter;
