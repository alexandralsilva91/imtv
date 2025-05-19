import api from "../services/api";
import { useEffect, useState } from "react";
import Section from "../common/Section";

interface IProps {
    id: number,
    showType: "Movies" | "TV Shows"
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
        } else if (showType === "TV Shows") {
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
            ("Loading") :
            (<Section
                showType={showType}
                title="More Like This"
                items={shows}
                isLoading={isLoading}
                isScrollable
            />)}
        </>
    )
}

export default MoreLikeThis;