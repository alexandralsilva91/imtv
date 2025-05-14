import { Link } from "react-router";
import "./card.scss";
import RatingStars from "./RatingStars";

interface IProps {
    id: string,
    title?: string,
    year?: string,
    rating: number,
    poster: string,
    showType: "Movies" | "TV Series"
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function Card({ showType, id, title, year, rating, poster }: IProps) {
    const link = showType === "Movies" ? `/movie/${id}` : `/tv/${id}`;

    return (
        <Link to={link} style={{ textDecoration: 'none', color: 'white' }} onClick={scrollToTop}>
            <div className="card">
                <img src={poster? (`https://image.tmdb.org/t/p/w500${poster}`) : ("../../public/no-poster.png")} className="card__poster" alt={`${title} poster`} />
                {title ? <h3 className="card__title" title={title}>{title}</h3> : null}
                {year ? <div className="card__year">{new Date(year).getFullYear()}</div> : null}
                <RatingStars rating={rating} />
            </div>
        </ Link>
    );
}

export default Card;