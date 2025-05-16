import { useEffect, useState } from "react";
import api from "../utils/api";
import Section from "../common/Section";

function AiringTodayTvShows() {
    const [isLoading, setIsLoading] = useState(true);
    const [shows, setShows] = useState([]);

    useEffect(() => {
        api.getTvAiringToday()
            .then((data) => {
                setShows(data.results);
            }).finally(() => {
                setIsLoading(false);
            })
    }, []);

    return (
        <>
        {isLoading? ("Loading") : 
        (<Section showType="TV Shows" title="Airing Today" items={shows} isLoading={isLoading} isScrollable/>)}
        </>
    );
}

export default AiringTodayTvShows;