import { useEffect, useState } from "react";
import api from "../utils/api";
import { useParams } from "react-router";
import SplashScreen from "../common/SplashScreen";
import { formatTime } from "../utils/format";
import Overview from "../common/Overview";
import Credits from "../common/Credits";

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
        <>
            {isLoading ? ("Loading") :
                (
                <>
                <SplashScreen
                    title={movie.title}
                    year={new Date(movie.release_date).getFullYear()}
                    rating={movie.vote_average}
                    runTime={formatTime(movie.runtime)}
                    backdropPath={movie.backdrop_path}
                    posterPath={movie.poster_path}
                    tags={movie.genres}
                />
                <Overview text={movie.overview}/>
                <Credits membersType="Cast" showType="Movie"/>
                <Credits membersType="Crew"/>
                
                </>
                )}
        </>

    )
}

export default Movie;