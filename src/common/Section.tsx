import Card from "./Card";
import "./section.scss";
import SectionLoader from "./SectionLoader";

interface IProps {
    showType: "Movies" | "TV Shows"
    title: string;
    items: [];
    isLoading: boolean;
    isScrollable: boolean;
}

function renderContent({ isLoading, showType, items, extraClassName }) {
    if (!isLoading && items.length === 0) {
        return (
            <p className="section__nodata">No available data.</p>
        );
    } else {
        return (
            <div className={`section__cards ${extraClassName}`}>
                {
                    showType === "TV Shows" ?
                        items.map((item) => (
                            <Card
                                showType="TV Shows"
                                key={item.id}
                                id={item.id}
                                title={item.name}
                                rating={item.vote_average}
                                poster={item.poster_path}
                                year={item.first_air_date}
                            />
                        ))
                        :
                        items.map((item) => (
                            <Card
                                showType="Movies"
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                rating={item.vote_average}
                                poster={item.poster_path}
                                year={item.release_date}
                            />
                        ))
                }
            </div >
        )
    }
}

function Section({ showType, title, items, isLoading, isScrollable }: IProps) {

    const extraClassName = isScrollable ? "scrollable" : "";

    return (
        <div className='section'>
            <h2 className='section__title'>{title}</h2>
            {isLoading ?
                (<SectionLoader isScrollable={isScrollable} />) :
                renderContent({ showType, isLoading, items, extraClassName })
            }
        </div>
    );
}

export default Section;