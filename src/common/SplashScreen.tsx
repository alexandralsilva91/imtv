import { buildImgUrl } from "../utils/format";
import RatingStars from "./RatingStars";
import "./splashscreen.scss"

interface IProps {
    showType: "Movies" | "TV Series",
    items: [],
    title: string,
    year: number,
    rating: number,
    runTime?: number,
    numberOfSeasons?: number,
    backdropPath: string,
    posterPath: string,
    tags: []
}

function SplashScreen({ showType, title, year, rating, runTime, numberOfSeasons, backdropPath, posterPath, tags }: IProps) {
    return (
        <div className="splash-screen">
            <div className="splash-screen__backdrop-image">
                <img src={buildImgUrl(backdropPath)} alt="background image" />
            </div>
            <div className="splash-screen__content">
                <div className="splash-screen__content-left" >
                    <img src={buildImgUrl(posterPath)} alt="poster image" />
                </div>
                <div className="splash-screen__content-right">
                    <h1 className="splash-screen__title">{title}</h1>
                    <div className="splash-screen__info">
                        <span><RatingStars rating={rating}/></span>
                        <span>{year}</span>
                        {showType === "Movies"? (<span>{runTime}</span>) : (<span>{numberOfSeasons} seasons</span>)}    
                    </div>
                    <div className="splash-screen__tags">
                        {tags.map((tag) => (
                            <div key={tag.id} className="splash-screen__tag">{tag.name}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SplashScreen;



