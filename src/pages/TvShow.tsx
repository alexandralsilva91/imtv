import api from "../services/api";
import { useParams } from "react-router";
import SplashScreen from "../page_sections/SplashScreen";
import Overview from "../page_sections/Overview";
import Credits from "../page_sections/Credits";
import { useEffect, useState } from "react";
import MoreLikeThis from "../page_sections/MoreLikeThis";

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
                        <Overview text={tvShow.overview ? tvShow.overview : "No available data."} />
                        <Credits membersType="Cast" showType="TV Shows" id={tvShow.id} />
                        <Credits membersType="Crew" showType="TV Shows" id={tvShow.id} />
                        <MoreLikeThis showType="TV Shows" id={id} />
                    </>
                )}
        </>
    )
}

export default TvShow;