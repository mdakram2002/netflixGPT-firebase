import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-36'>
      <img src={IMG_CDN_URL + posterPath} alt='movies_posters' />
    </div>
  )
}

export default MovieCard;
