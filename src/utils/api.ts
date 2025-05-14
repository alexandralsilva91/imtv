

const fetchData = async (url: string) => {
    try {
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmE1ZGVlNGUzMzBiNmMwYWNjMzdjNDMzMDUzMDk1NyIsIm5iZiI6MS43NDY0MzcyMDQ4MDQ5OTk4ZSs5LCJzdWIiOiI2ODE4ODQ1NGYyNzlhOTM0Y2E5MTM3OWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vA0QKejH2wn4dwcIkP2-YfLPdrBNaBhayN-IXL2y1oU'
                }
            });
        return await response.json();

    } catch (error) {
        console.log("Error getting the data", error);
        throw error;
    }
}

const api = {
    getPopularMovies: () => fetchData("https://api.themoviedb.org/3/movie/popular"),
    getTopRatedMovies: () => fetchData("https://api.themoviedb.org/3/movie/top_rated"),
    getNowPlayingMovies: () => fetchData("https://api.themoviedb.org/3/movie/now_playing"),
    getUpcomingMovies: () => fetchData("https://api.themoviedb.org/3/movie/upcoming"),
    getMoreLikeThisMovie: (movie_id: number) => fetchData(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations`),
    getMovie: (movie_id: number | string) => fetchData(`https://api.themoviedb.org/3/movie/${movie_id}`),
    getMovieCredits: (movie_id: number | string) => fetchData(`https://api.themoviedb.org/3/movie/${movie_id}/credits`),
    getMovieImages: (movie_id: number) => fetchData(`https://api.themoviedb.org/3/movie/${movie_id}/images`),
    getTvPopular: () => fetchData("https://api.themoviedb.org/3/tv/popular"),
    getTvTopRated: () => fetchData("https://api.themoviedb.org/3/tv/top_rated"),
    getTvOnTheAir: () => fetchData("https://api.themoviedb.org/3/tv/on_the_air"),
    getTvAiringToday: () => fetchData("https://api.themoviedb.org/3/tv/airing_today"),
    getMoreLikeThisTvShow: (series_id: number | string) => fetchData(`https://api.themoviedb.org/3/tv/${series_id}/recommendations`),
    getTvShow: (tv_id: number | string) => fetchData(`https://api.themoviedb.org/3/tv/${tv_id}`),
    getTvShowCredits: (tv_id: number | string) => fetchData(`https://api.themoviedb.org/3/tv/${tv_id}/credits`),
    getTvShowImages: (tv_id: number) => fetchData(`https://api.themoviedb.org/3/tv/${tv_id}/images`),
    getSearchQuery: (input: string) => fetchData(`https://api.themoviedb.org/3/search/movie?query=${input}`),
}

export default api;
