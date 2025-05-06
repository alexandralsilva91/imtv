import PopularMovies from '../movies_sections/PopularMovies';
import NowPlayingMovies from '../movies_sections/NowPlayingMovies';
import TopRatedMovies from '../movies_sections/TopRatedMovies';
import AiringTodayMovies from '../movies_sections/AiringTodayMovies';

function Movies() {
    return (
        <div className='sections'>
            <PopularMovies />
            <NowPlayingMovies />
            <TopRatedMovies />
            <AiringTodayMovies />
        </div>
    )
}

export default Movies;