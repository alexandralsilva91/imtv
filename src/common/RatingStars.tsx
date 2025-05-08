import "./ratingstars.scss"

function convertRatingToStars(rating: number) {
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

interface IProps {
    rating: number,
}

function RatingStars({rating} : IProps) {
    return (
        <div className="rating-stars">
            {convertRatingToStars(rating)}
        </div>
    )  
}

export default RatingStars;