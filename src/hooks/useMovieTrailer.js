import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailersVideo } from "../utils/moviesSlice";
import { API_OPTION } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + " /videos?language=en-US", API_OPTION)
        const json = await data.json();

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[2] : json.results[0];
<<<<<<< HEAD
        // console.log(trailer);
=======
>>>>>>> 626cd9ab50167197d7078e82ae71325efb3551a7
        dispatch(addTrailersVideo(trailer));
    };
    useEffect(() => {
        getMovieVideo();
    }, [])
}

export default useMovieTrailer;