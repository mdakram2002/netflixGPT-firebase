/** @format */

import React from "react";
import Movies_Img from "../assets/movie_logo.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { LANGUAGES_SUPPORTERD } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component is unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className=" flex justify-between absolute px-12 py-2 bg-gradient-to-b  from-black w-full z-10">
      <img
        className="w-[95px] cursor-pointer"
        src={Movies_Img}
        alt="movie_image"
      />
      {user && (
        <div className="flex p-2 space-x-2">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="p-2 bg-gray-900 text-white rounded-lg"
            >
              {LANGUAGES_SUPPORTERD.map((lang) => (
                <option key={lang.idenfier} value={lang.idenfier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <img
            className="w-[35px] h-[35px] "
            src={user.photoURL}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 py-1 px-3 rounded-md text-white text-sm font-bold hover:underline"
          >
            Sign Out
          </button>
          <button
            onClick={handleGptSearch}
            className="bg-red-600 py-1 px-3 rounded-md text-white text-sm font-bold hover:underline"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
