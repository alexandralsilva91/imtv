import Card from "./Card";
import Title from "./Title";
import api from "../utils/api";
import { useEffect, useState } from "react";
import "./morelikethis.scss";
import Section from "./Section";

interface IProps {
    id: number,
}

function MoreLikeThese({ id }: IProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        api.getMoreLikeThisMovie(id)
            .then((data) => {
                setMovies(data.results);
            }).finally(() => {
                setIsLoading(false);
            })
    }, [id]);

    return (

        <Section
            title="More Like This"
            items={movies}
            isLoading={isLoading}
            isScrollable
        />

    )
}

export default MoreLikeThese;