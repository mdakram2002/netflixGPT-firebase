import { useEffect } from "react";
import { MOVIES_API_KEY, API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {

        const data = await fetch(MOVIES_API_KEY, API_OPTION);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies;
