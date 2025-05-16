import api from "../utils/api";
import { useParams } from "react-router";
import SplashScreen from "../common/SplashScreen";
import Overview from "../common/Overview";
import Credits from "../common/Credits";
import { useEffect, useState } from "react";
import MoreLikeThis from "../common/MoreLikeThis";

function TvShow() {

    const { id } = useParams();
    const [tvShow, setTvShow] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.getTvShow(id!)
            .then((data) => {
                console.log(data);
                setTvShow(data);
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
                            title={tvShow.name}
                            year={new Date(tvShow.first_air_date).getFullYear()}
                            rating={tvShow.vote_average}
                            numberOfSeasons={tvShow.number_of_seasons}
                            backdropPath={tvShow.backdrop_path}
                            posterPath={tvShow.poster_path}
                            tags={tvShow.genres}
                        />
                        <Overview text={tvShow.overview? tvShow.overview : "No available data."} />
                        <Credits membersType="Cast" showType="TV Series" id={tvShow.id} />
                        <Credits membersType="Crew" showType="TV Series" id={tvShow.id} />
                        <MoreLikeThis showType="TV Series" id={id} />
                    </>
                )}
        </>
    )
}

export default TvShow;