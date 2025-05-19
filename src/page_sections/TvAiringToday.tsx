import { useEffect, useState } from "react";
import api from "../services/api";
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
        <Section showType="TV Shows" title="Airing Today" items={shows} isLoading={isLoading} isScrollable />
    );
}

export default AiringTodayTvShows;