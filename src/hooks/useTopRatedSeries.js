import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedTVSeries } from "../utils/moviesSlice";

const useTopRatedSeries = () => {
    const dispatch = useDispatch();
    const getTVSeries = async () => {

        const data = await fetch("https://api.themoviedb.org/3/tv/top_rated?page=1", API_OPTION);
        const json = await data.json();
        console.log(json.results);
        dispatch(addTopRatedTVSeries(json.results));
    };
    useEffect(() => {
        getTVSeries()
    }, [])
}

export default useTopRatedSeries;
