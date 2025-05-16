import Popular from "../page_sections/Popular";
import TopRated from "../page_sections/TopRated";
import AiringTodayTvShows from "../page_sections/TvAiringToday";

function Tv() {
    return(
        <>
            <Popular showType="TV Shows" />
            <TopRated showType="TV Shows" />
            <AiringTodayTvShows />
            
        </>
    )
}

export default Tv;