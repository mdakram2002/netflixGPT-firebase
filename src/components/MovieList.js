import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if (!movies) {
        return <div>Loading...</div>; // Display a loading message if movies are not yet available
    }

    return (
        <div className='px-8'>
            <h2 className='text-2xl py-2 text-white'>{title}</h2>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                <div className='flex space-x-4'>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieList;
