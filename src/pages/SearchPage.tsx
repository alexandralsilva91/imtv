import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import api from "../utils/api";
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
            <Section showType="Movies" items={searchedMovies} isLoading={isLoading} title="Movies results" isScrollable />
            <Section showType="TV Series" items={searchedSeries} isLoading={isLoading} title="Series results" isScrollable />
        </>    
    )
}

export default SearchPage;