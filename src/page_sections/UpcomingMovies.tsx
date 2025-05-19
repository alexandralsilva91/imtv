import { useEffect, useState } from 'react';
import api from '../services/api';
import Section from '../common/Section';

function UpcomingMovies() {
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
        <>
            {isLoading ? ("Loading") :
                (<Section title="Upcoming Movies" items={movies} isLoading={isLoading} isScrollable />)}
        </>
    );
}

export default UpcomingMovies;