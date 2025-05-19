import Title from "../common/Title";
import "../styles/overview.scss";

interface IProps {
    text: string
}

function Overview({ text }: IProps) {
    return (
        <div className="overview">
            <Title title="Overview" noMargin />
            <div className="overview__text">{text}</div>
        </div>
    )
}

export default Overview;