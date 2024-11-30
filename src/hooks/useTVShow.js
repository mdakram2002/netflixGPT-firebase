import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTVShow } from "../utils/moviesSlice";
const useTVShow = () => {
    const dispatch = useDispatch();
    const getTVShow = async () => {

        const data = await fetch("https://api.themoviedb.org/3/discover/tv?page=1", API_OPTION);
        const json = await data.json();
        dispatch(addTVShow(json.results));
    };
    useEffect(() => {
        getTVShow()
    }, [])
}

export default useTVShow;