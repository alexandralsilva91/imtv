import { useEffect, useState } from "react";
import "../styles/credits.scss";
import api from "../services/api";
import { useParams } from "react-router";
import Title from "../common/Title";
import { buildAvatarUrl } from "../services/format";


interface IProps {
    membersType: "Cast" | "Crew",
    showType?: "Movies" | "TV Shows",
}

function Credits({ membersType, showType }: IProps) {

    const { id } = useParams();
    const [castElements, setCastElements] = useState([]);
    const [crewElements, setCrewElements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
        if (showType === "Movies") {
            api.getMovieCredits(id!)
                .then((data) => {                   // data = { cast: [{}, {}, {}, {}, ...] crew: [{}, {}, {}, {}, ...] }
                    setCastElements(data.cast);     // data.cast= [{}, {}, {}, {}, ...]
                    setCrewElements(data.crew);
                }).finally(() => {
                    setIsLoading(false);
                });
        } else if (showType === "TV Shows") {
            api.getTvShowCredits(id!)
                .then((data) => {
                    setCastElements(data.cast);
                    setCrewElements(data.crew);
                }).finally(() => {
                    setIsLoading(false);
                });
        }

    }, [id, showType]);

    const castResultsToRender = () => {
        if (!castElements || castElements.length === 0 || castElements[0] === null) {
            return <p>No available data.</p>
        }
        return (
            castElements.map((element) => (
                <div className="__cast" key={'cast_' + element.id}>
                    <div className="__cast-element">
                        <div className="__cast-element-avatar">
                            <img src={element.profile_path === null ? ("../public/user.svg") : (buildAvatarUrl(element.profile_path))} alt="avatar" />
                        </div>
                        <span className="__cast-element-name">{element.name}</span>
                        <span className="__cast-element-role">{element.character}</span>
                    </div>
                </div>))
        )
    }

    const crewResultsToRender = () => {
        if (!crewElements || crewElements.length === 0 || crewElements[0] === null) {
            return <p>No available data.</p>
        }
        return (
            crewElements.map((element) => (
                <div className="__crew" key={'crew_' + element.id}>
                    <div className="__crew-element">
                        <span className="__crew-element-name">{element.name}</span>
                        <span className="__crew-element-role">{element.known_for_department}</span>
                    </div>
                </div>
            ))
        )
    }


    return (
        <div>
            <div className="credits">
                <Title title={membersType} />
                <div className="__members-type">
                    {isLoading ?
                        ("Loading") :
                        (membersType === "Cast" ?
                            (castResultsToRender()) :
                            (crewResultsToRender())
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Credits;




