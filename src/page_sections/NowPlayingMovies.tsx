import { useEffect, useState } from 'react';
import api from '../utils/api';
import Section from '../common/Section';

function NowPlayingMovies() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api.getNowPlayingMovies()
            .then((data) => {
                setMovies(data.results);
            }).finally(() => {
                setIsLoading(false);
            })
    }, []);

    return (
        <>
        {isLoading? ("Loading") : 
        (<Section showType="Movies" title="Now playing" items={movies} isLoading={isLoading} isScrollable/>)}
        </>
    );
}

export default NowPlayingMovies;