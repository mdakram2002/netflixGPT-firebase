import React from 'react';
import Movies_Img from '../assets/movie_logo.png';
// import user_icon from '../assets/user_icon.png';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")

      }).catch((error) => {
        navigate("/error", error)
      });
  }
  return (
    <div className=' flex justify-between absolute px-8 py-2 bg-gradient-to-b  from-black w-full z-10'>
      <img
        className='w-[95px] cursor-pointer'
        src={Movies_Img} alt="movie_image"
      />
      {user && (<div className='flex p-2 space-x-2'>
        <img className='w-[35px] h-[35px] '
          src={user.photoURL} alt="usericon" />
        <button onClick={handleSignOut} className='bg-red-600 py-1 px-3 rounded-md text-white text-sm font-bold hover:underline'>Sign Out</button>
      </div>)}


    </div>
  )
}

export default Header;