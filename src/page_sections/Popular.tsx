import { useEffect, useState } from 'react';
import api from '../services/api';
import Section from '../common/Section';


interface IProps {
    showType: "Movies" | "TV Shows"
}

function Popular({ showType }: IProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [shows, setShows] = useState([]);

    useEffect(() => {
        if (showType === "Movies") {
            api.getPopularMovies()
                .then((data) => {
                    setShows(data.results);
                }).finally(() => {
                    setIsLoading(false);
                })
        } else if (showType === "TV Shows") {
            api.getTvPopular()
                .then((data) => {
                    setShows(data.results);
                }).finally(() => {
                    setIsLoading(false);
                })
        }
    }, []);

    return (
        <Section title={`Popular ${showType}`} showType={showType} items={shows} isLoading={isLoading} />
    );
}

export default Popular;