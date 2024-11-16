import React from 'react'
import Movies_Img from '../assets/movie_logo.png'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b  from-black w-full z-10'>
      <img
      className='w-[95px]'
      src={Movies_Img} alt="movie_image" />

    </div>
  )
}

export default Header;