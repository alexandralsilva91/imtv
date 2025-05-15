import { useState } from "react";
import { useNavigate } from "react-router";
import "./searchbar.scss";


function SearchBar() {

    const [inputText, setInputText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() !== "") {
            navigate(`/search?q=${encodeURIComponent(inputText)}`);
        }
    };    


    return(
        <form className="search-bar" onSubmit={handleSubmit}>
            <input 
                className="search-bar__input"
                type="text" 
                id="search title" 
                placeholder="search here..." 
                onChange={(e) => setInputText(e.target.value)}
            />
            <button className="search-bar__button" type="submit">
                <img src="../../public/search.svg" alt="search symbol" />
            </button>
        </form>
        

    )
}

export default SearchBar;