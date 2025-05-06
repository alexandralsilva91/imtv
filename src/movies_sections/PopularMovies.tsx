import { useEffect, useState } from 'react';
import api from '../utils/api';
import Section from '../common/Section';


function PopularMovies() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api.getPopularMovies()
            .then((data) => {
                setMovies(data.results);
            }).finally(() => {
                setIsLoading(false);
            })
    }, []);

    return (
        <Section title="Popular Movies" items={movies} isLoading={isLoading} />
    );
}

export default PopularMovies;