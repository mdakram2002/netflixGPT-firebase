import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({ movieId }) => {
  const trailerVedio = useSelector((store) => store.movies?.trailerVedio);
  // fetch the tarailer video & updating the stor with trailer video data.
  useMovieTrailer(movieId);


  return (
    <div className=''>
      <iframe
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + trailerVedio?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
    </div>
  )
}

export default VideoBackground;
