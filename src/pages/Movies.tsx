import NowPlayingMovies from '../page_sections/NowPlayingMovies';
import TopRated from '../page_sections/TopRated';
import UpcomingMovies from '../page_sections/UpcomingMovies';
import Popular from '../page_sections/Popular';

function Movies() {
    return (
        <div className='sections'>
            <Popular showType="Movies" />
            <NowPlayingMovies />
            <TopRated showType="Movies" />
            <UpcomingMovies />
        </div>
    )
}

export default Movies;