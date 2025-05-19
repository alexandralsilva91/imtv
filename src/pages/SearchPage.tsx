import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import api from "../services/api";
import Section from "../common/Section";

function SearchPage() {
    const [searchParams] = useSearchParams();
    const input = searchParams.get("q");

    const [searchedMovies, setSearchedMovies] = useState([]);
    const [searchedSeries, setSearchedSeries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        if (input) {
            Promise.all([
                api.getSearchMoviesByQuery(String(input)),
                api.getSearchSeriesByQuery(String(input)),
            ])
                .then(([moviesData, seriesData]) => {
                    setSearchedMovies(moviesData.results);
                    setSearchedSeries(seriesData.results);
                })
                .catch((error) => {
                    console.error("Error getting the data", error)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }, [input])

    return (
        <>
            <Section showType="Movies" items={searchedMovies} isLoading={isLoading} title="Movie results" isScrollable />
            <Section showType="TV Shows" items={searchedSeries} isLoading={isLoading} title="TV Show results" isScrollable />
        </>
    )
}

export default SearchPage;