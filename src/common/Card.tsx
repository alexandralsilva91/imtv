import { Link } from "react-router";
import "./card.scss";

interface IProps {
    id: string;
    title?: string;
    year?: string;
    rating: number;
    poster: string;
}

function convertRating(rating: number) {
    const convertedRatio = Number((rating / 2).toFixed(1));

    if (convertedRatio <= 0.5) {
        return '½';
    } else if (convertedRatio <= 1) {
        return '★';
    } else if (convertedRatio <= 1.5) {
        return '★½';
    } else if (convertedRatio <= 2) {
        return '★★';
    } else if (convertedRatio <= 2.5) {
        return '★★½';
    } else if (convertedRatio <= 3) {
        return '★★★';
    } else if (convertedRatio <= 3.5) {
        return '★★★½';
    } else if (convertedRatio <= 4) {
        return '★★★★';
    } else if (convertedRatio <= 4.5) {
        return '★★★★½';
    } else {
        return '★★★★★';
    }
}

function Card({ id, title, year, rating, poster }: IProps) {
    return (
        <Link to={`/movie/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/w500${poster}`} className="card__poster" alt="movie poster" />
                {title ? <h3 className="card__title" title={title}>{title}</h3> : null}
                {year ? <div className="card__year">{new Date(year).getFullYear()}</div> : null}
                <div className="card__rating">{convertRating(rating)}</div>
            </div>
        </Link>
    );
}

export default Card;