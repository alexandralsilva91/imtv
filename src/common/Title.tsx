import "./title.scss";

interface IProps {
    title: string,
    smaller?: boolean,
}

function Title( {title, smaller} : IProps) {
    
    return(
        <>
        {smaller? 
            (<div className="title-smaller">{title}</div>) 
            : 
            (<div className="title">{title}</div>)}
        </>
    )    
}

export default Title;