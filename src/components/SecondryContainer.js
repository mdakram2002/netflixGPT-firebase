import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-56 relative z-20'>
        <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"TV Show"} movies={movies.tvShow} />
        <MovieList title={"Top Rated TV Series"} movies={movies.tvSeries} />
      </div>
    </div>
  )
}

export default SecondryContainer;
