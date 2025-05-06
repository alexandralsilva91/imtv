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
    getTopRatedMovies: () => fetchData("https://api.themoviedb.org/3/movie/top_rated"),
    getNowPlayingMovies: () => fetchData("https://api.themoviedb.org/3/movie/now_playing"),
    getUpcomingMovies: () => fetchData("https://api.themoviedb.org/3/movie/upcoming"),
    getTvPopular: () => fetchData("https://api.themoviedb.org/3/tv/popular"),
    getTvTopRated: () => fetchData("https://api.themoviedb.org/3/tv/top_rated"),
    getTvOnTheAir: () => fetchData("https://api.themoviedb.org/3/tv/on_the_air"),
    getTvAiringToday: () => fetchData("https://api.themoviedb.org/3/tv/airing_today"),
    getMovie: (movie_id: string) => fetchData(`https://api.themoviedb.org/3/movie/${movie_id}`),
    getTvShow: () => fetchData("https://api.themoviedb.org/3/tv/{tv_id}"),
    getMovieCredits: () => fetchData("https://api.themoviedb.org/3/movie/{movie_id}/credits"),
    getTvShowCredits: () => fetchData("https://api.themoviedb.org/3/tv/{tv_id}/credits"),
    getMovieImages: () => fetchData("https://api.themoviedb.org/3/movie/{movie_id}/images"),
    getTvShowImages: () => fetchData("https://api.themoviedb.org/3/tv/{tv_id}/images"),
    getPopularMovies: () => fetchData("https://api.themoviedb.org/3/movie/popular"),
}

export default api;
