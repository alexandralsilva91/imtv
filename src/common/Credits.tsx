import { useEffect } from "react";
import "./credits.scss";
import Title from "./Title";
import api from "../utils/api";

interface IProps {
    avatarPath?: string,
    name: string,
    role: string,
}

function Credits({avatarPath, name, role} : IProps) {

    const { id } = useParams();
    const [credits, setCredits] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.getMovieCredits(id!)
            .then((data) => {
                console.log(data);
                setCredits(data);
            }).finally(() => {
                setIsLoading(false);
            });
    }, []);

    return(
        <>
        {isLoading? ("Loading") : 
        (<div className="credits">
            <Title title=""/>
            <div>
                <div>
                    <img src={} alt="avatar" />
                </div>
                <div>{name}</div>
                <div>{role}</div>
            </div>
        </div>)}
        </>   
    )
}

export default Credits;