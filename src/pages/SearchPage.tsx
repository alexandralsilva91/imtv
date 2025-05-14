import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import api from "../utils/api";
import Section from "../common/Section";

function SearchPage() {
    const [searchParams] = useSearchParams();
    const input = searchParams.get("q");

    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        if (input) {
            api.getSearchQuery(String(input))
                .then((data) => {
                    setSearchResults(data.results);
                }).finally(() => {
                    setIsLoading(false);
                })
        }
    }, [input])


    return (

        <Section showType="Movies" items={searchResults} isLoading={isLoading} title="Movies results" isScrollable />

    )
}

export default SearchPage;