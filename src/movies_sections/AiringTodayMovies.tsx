import { useEffect, useState } from 'react';
import api from '../utils/api';
import Section from '../common/Section';

function AiringTodayMovies() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api.getUpcomingMovies()
            .then((data) => {
                setMovies(data.results);
            }).finally(() => {
                setIsLoading(false);
            })
    }, []);

    return (
        <Section title="Airing Today" items={movies} isLoading={isLoading} isScrollable />
    );
}

export default AiringTodayMovies;