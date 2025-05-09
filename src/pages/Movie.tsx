import { useEffect, useState } from "react";
import api from "../utils/api";
import { useParams } from "react-router";
import SplashScreen from "../common/SplashScreen";
import { formatTime } from "../utils/format";
import Overview from "../common/Overview";
import Credits from "../common/Credits";
import MoreLikeThese from "../common/MoreLikeThis";

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
    }, [id]);

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
                        <Overview text={movie.overview} />
                        <Credits membersType="Cast" showType="Movie" id={movie.idd} />
                        <Credits membersType="Crew" id={movie.id} />
                        <MoreLikeThese id={movie.id} />
                    </>
                )}
        </>

    )
}

export default Movie;