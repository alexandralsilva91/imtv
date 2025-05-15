import { useEffect, useState } from "react";
import api from "../utils/api";
import { useParams } from "react-router";
import SplashScreen from "../common/SplashScreen";
import { formatTime } from "../utils/format";
import Overview from "../common/Overview";
import Credits from "../common/Credits";
import MoreLikeThis from "../common/MoreLikeThis";

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
                        <Overview text={movie.overview? movie.overview : "No available data"} />
                        <Credits membersType="Cast" showType="Movies" id={movie.id} />
                        <Credits membersType="Crew" showType="Movies" id={movie.id} />
                        <MoreLikeThis showType="Movies" id={movie.id} />
                    </>
                )}
        </>

    )
}

export default Movie;