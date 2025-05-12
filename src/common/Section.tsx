import Card from "./Card";
import "./section.scss";

interface IProps {
    showType: "Movies" | "TV Series"
    title: string;
    items: [];
    isLoading: boolean;
    isScrollable: boolean;
}

function Section({ showType, title, items, isLoading, isScrollable }: IProps) {

    const extraClass = isScrollable ? ("scrollable") : ("");

    return (
        <div className='section'>
            <h2 className='section__title'>{title}</h2>
            {isLoading ? (
                <div>Loading</div>
            ) : (
                showType === "TV Series" ?
                    (<div className={`section__cards ${extraClass}`}>
                        {items.map((item) => (
                            <Card
                                showType="TV Series"
                                key={item.id}
                                id={item.id}
                                title={item.name}
                                rating={item.vote_average}
                                poster={item.poster_path}
                                year={item.first_air_date}
                            />
                        ))};
                    </div>) :

                    (<div className={`section__cards ${extraClass}`}>
                        {items.map((item) => (
                            <Card
                                showType="Movies"
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                rating={item.vote_average}
                                poster={item.poster_path}
                                year={item.release_date}
                            />
                        ))};
                    </div>)
            )}
        </div>
    );
}

export default Section;