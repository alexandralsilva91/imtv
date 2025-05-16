import { Link } from "react-router";
import Button from "./Button";
import "./navbar.scss"
import SearchBar from "./SearchBar";

function NavBar() {
    return (
        <div className="navbar">
            <Link className="navbar__logo" to="/">
                <h1>IMTV</h1>
            </Link>
            <SearchBar />
            <div className="navbar__buttons">
                
                <Link to="/movies">
                    <Button color="blue">Movies</Button>
                </Link>
                <Link to="/tv">
                    <Button color="yellow">Tv</Button>
                </Link>
            </div>
        </div>)
}

export default NavBar;


/*
 <form id="search" class="js-search-form search-form" action="/search/" method="get" autocorrect="off">
                    <input autocomplete="false" name="hidden" type="text" style="display:none;"/>
                        <fieldset>
                            <label for="search-q" class="hidden">Search:</label>
                            <input type="text" name="q" id="search-q" class="field -borderless" data-lpignore="true" inputmode="search" value="" />
                            <input type="submit" value="Search" class="action" />
                        </fieldset>
                </form> */