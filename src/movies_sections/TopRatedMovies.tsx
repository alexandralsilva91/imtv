import { useEffect, useState } from 'react';
import api from '../utils/api';
import Section from '../common/Section';

function TopRatedMovies() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api.getTopRatedMovies()
            .then((data) => {
                setMovies(data.results);
            }).finally(() => {
                setIsLoading(false);
            })
    }, []);

    return (
        <Section title="Top Rated" items={movies} isLoading={isLoading} isScrollable/>
    );
}

export default TopRatedMovies;