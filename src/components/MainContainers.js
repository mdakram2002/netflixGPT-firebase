import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainers = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return; //if the movies is not persent then return null, this is also known as early return.

    const mainMovies = movies[1];
    const {original_title, overview, id } = mainMovies;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}
export default MainContainers;
