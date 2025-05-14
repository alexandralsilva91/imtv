import { buildImgUrl } from "../utils/format";
import RatingStars from "./RatingStars";
import "./splashscreen.scss"

interface IProps {
    title: string,
    year: number,
    rating: number,
    runTime?: number,
    numberOfSeasons?: number,
    backdropPath: string,
    posterPath: string,
    tags: []
}

function SplashScreen({ title, year, rating, runTime, numberOfSeasons, backdropPath, posterPath, tags }: IProps) {
    return (
        <div className="splash-screen">
            <div className="splash-screen__backdrop-image">
                <img src={backdropPath? buildImgUrl(backdropPath) : ("../../public/no-backdrop.png")} alt="background image" />
            </div>
            <div className="splash-screen__content">
                <div className="splash-screen__content-left" >
                    <img src={posterPath? buildImgUrl(posterPath) : ("../../public/no-poster.png")} alt="poster image" />
                </div>
                <div className="splash-screen__content-right">
                    <h1 className="splash-screen__title">{title}</h1>
                    <div className="splash-screen__info">
                        <span><RatingStars rating={rating} /></span>
                        <span>{year}</span>
                        {Boolean(runTime) ? (<span>{runTime}</span>) : null}
                        {Boolean(numberOfSeasons) ? <span>{numberOfSeasons} seasons</span> : null}
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



