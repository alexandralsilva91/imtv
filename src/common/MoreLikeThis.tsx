import api from "../utils/api";
import { useEffect, useState } from "react";
import Section from "./Section";

interface IProps {
    id: number,
    showType: "Movies" | "TV Series"
}

function MoreLikeThis({ showType, id }: IProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [shows, setShows] = useState([]);


    useEffect(() => {
        if (showType === "Movies") {
            api.getMoreLikeThisMovie(id)
                .then((data) => {
                    setShows(data.results);
                }).finally(() => {
                    setIsLoading(false);
                })
        } else if (showType === "TV Series") {
            api.getMoreLikeThisTvShow(id)
                .then((data) => {
                    setShows(data.results);
                }).finally(() => {
                    setIsLoading(false);
                })
        }
    }, [showType, id]);

    return (
        <>{isLoading ?
            ("Loading"):
            (<Section
                showType = { showType }
                title = "More Like This"
                items = { shows }
                isLoading = { isLoading }
                isScrollable
            />)}
        </>
    )
}

export default MoreLikeThis;