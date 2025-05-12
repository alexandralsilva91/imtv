import { useEffect, useState } from "react";
import "./credits.scss";
import api from "../utils/api";
import { useParams } from "react-router";
import Title from "./Title";
import { buildAvatarUrl } from "../utils/format";


interface IProps {
    membersType: "Cast" | "Crew",
    showType?: "Movies" | "TV Series",
}

function Credits({ membersType, showType }: IProps) {

    const { id } = useParams();
    const [castElements, setCastElements] = useState([]);
    const [crewElements, setCrewElements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const request = se o type for igual a movie
    // resquest = api.getMovieCredits
    // se o type for igual a tv
    // request = api.getTvShowCredits

    useEffect(() => {
        if (showType === "Movies") {
            api.getMovieCredits(id!)  
            .then((data) => {                   // data = { cast: [{}, {}, {}, {}, ...] crew: [{}, {}, {}, {}, ...] }
                setCastElements(data.cast);     // data.cast= [{}, {}, {}, {}, ...]
                setCrewElements(data.crew);
            }).finally(() => {
                setIsLoading(false);
            });
        } else if (showType === "TV Series") {
            api.getTvShowCredits(id!)  
            .then((data) => {               
                setCastElements(data.cast); 
                setCrewElements(data.crew);
            }).finally(() => {
                setIsLoading(false);
            });
        }
        
    }, [id, showType]);

    return (
        <div>
            {isLoading ? ("Loading") :
                (
                    <div className="credits">
                        <Title title={membersType} />
                        <div className="__members-type">
                            {membersType === "Cast" ?
                                (castElements.map((element) => (
                                    <div className="__cast" key={'cast_' + element.id}>
                                        <div className="__cast-element">
                                            <div className="__cast-element-avatar">
                                                <img src={element.profile_path === null ? ("../public/user.svg") : (buildAvatarUrl(element.profile_path))} alt="avatar" />
                                            </div>
                                            <span className="__cast-element-name">{element.name}</span>
                                            <span className="__cast-element-role">{element.character}</span>
                                        </div>
                                    </div>))
                                ) :
                                (crewElements.map((element) => (
                                    <div className="__crew" key={'crew_' + element.id}>
                                        <div className="__crew-element">
                                            <span className="__crew-element-name">{element.name}</span>
                                            <span className="__crew-element-role">{element.known_for_department}</span>
                                        </div>
                                    </div>
                                )))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Credits;




