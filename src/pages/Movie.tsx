import { useEffect, useState } from "react";
//import SplashScreen from "../common/SplashScreen";
import api from "../utils/api";
import { useParams } from "react-router";
import SplashScreen from "../common/SplashScreen";

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.getMovie(id!)
            .then((data) => {
                console.log(data);
                setMovie(data);
            }).finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <SplashScreen
            title={movie.title}
            year={movie.release_date}
            rating={movie.vote_average}
            movieDuration={movie.runtime}
            tags={movie.genres}
            backgroundImg={movie.backdrop_path}
        />)
}

export default Movie;