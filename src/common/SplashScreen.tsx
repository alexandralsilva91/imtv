import { buildImgUrl } from "../utils/api";

interface IProps {
    items: [],
    title: string,
    year: number,
    rating: any,
    movieDuration: any,
    tags: [],
}

function SplashScreen({ title, year, rating, movieDuration, backgroundImg, tags }: IProps) {
    return (
        <div className="splash-screen">
            <img className="splash-screen__background-img" src="" alt="" />
            <div className="splash-screen__content">
                <img src={buildImgUrl(backgroundImg)} alt="background-img" />
                <div>
                    <h1>{title}</h1>
                    <div>
                        <span>{rating}</span>
                        <span>{year}</span>
                        <span>{movieDuration}</span>
                    </div>
                    <div className="tags">
                        {/*fazer map das tags*/}
                        <span></span>
                    </div>
                </div>
            </div>                
        </div>
    )
}

export default SplashScreen;