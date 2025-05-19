import { useEffect, useState } from 'react';
import api from '../services/api';
import Section from '../common/Section';

interface IProps {
    showType: "Movies" | "TV Shows"
}

function TopRated({ showType }: IProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [shows, setShows] = useState([]);

    useEffect(() => {
        if (showType === "Movies") {
            api.getTopRatedMovies()
                .then((data) => {
                    setShows(data.results);
                }).finally(() => {
                    setIsLoading(false);
                })
        } else if (showType === "TV Shows") {
            api.getTvTopRated()
                .then((data) => {
                    setShows(data.results);
                }).finally(() => {
                    setIsLoading(false);
                })
        }
    }, []);

    return (
        <Section showType={showType} title={`Top Rated ${showType}`} items={shows} isLoading={isLoading} isScrollable />
    );
}

export default TopRated;