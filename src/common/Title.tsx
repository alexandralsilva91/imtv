import "./title.scss";

interface IProps {
    title: string,
    noMargin: boolean,
}

function Title( {title, noMargin} : IProps) {
    
    return(
        <div className={`title${noMargin? " title--no-margin" : ""}`}>{title}</div> 
    )    
}

export default Title;