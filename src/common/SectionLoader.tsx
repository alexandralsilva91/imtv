import ContentLoader from "react-content-loader";

// I used https://skeletonreact.com/ to help me to do this Component.
// I used it to create a loading effect of the cards, on the Movies, Tv and SearchPage pages. 

interface IProps {
    isScrollable: boolean,
}

function SectionLoader({ isScrollable = true} : IProps) {
    return (
        <ContentLoader
            speed={1}
            width={1000}
            height={402}
            viewBox="0 0 1000 402"
            backgroundColor="rgba(255, 255, 255, 0.05)"
            foregroundColor="golden"
        >
            {isScrollable ? (
                <>
                    <rect x="32" y="0" rx="4" ry="4" width="212" height="402" />
                    <rect x="268" y="0" rx="4" ry="4" width="212" height="402" />
                    <rect x="504" y="0" rx="4" ry="4" width="212" height="402" />
                    <rect x="740" y="0" rx="4" ry="4" width="212" height="402" />
                </>
            ) : (
                <>
                    <rect x="108" y="0" rx="4" ry="4" width="212" height="402" />
                    <rect x="344" y="0" rx="4" ry="4" width="212" height="402" />
                    <rect x="580" y="0" rx="4" ry="4" width="212" height="402" />
                    <rect x="816" y="0" rx="4" ry="4" width="212" height="402" />
                </>
            )}

        </ContentLoader>
    );
}

export default SectionLoader;