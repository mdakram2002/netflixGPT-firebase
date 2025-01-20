import { useEffect } from "react";
import { MOVIES_API_KEY, API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {

        const data = await fetch(MOVIES_API_KEY, API_OPTION);
        const json = await data.json();
<<<<<<< HEAD
        console.log(json.results);
=======
>>>>>>> 626cd9ab50167197d7078e82ae71325efb3551a7
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies;
