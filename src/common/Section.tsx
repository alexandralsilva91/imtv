import Card from "./Card";
import "./section.scss";

interface IProps {
    title: string;
    items: [];
    isLoading: boolean;
}

function Section({ title, items, isLoading }: IProps) {

    return (
        <div className='section'>
            <h2 className='section__title'>{title}</h2>
            {isLoading ? (
                <div>Loading</div>
            ) : (
                <div className='section__cards'>
                    {items.map((item) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            rating={item.vote_average}
                            poster={item.poster_path}
                            year={item.release_date}
                        />
                    ))};
                </div>
            )}

        </div>
    );
}

export default Section;