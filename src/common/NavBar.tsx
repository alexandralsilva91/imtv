import { Link } from "react-router";
import Button from "./Button";
import "../styles/navbar.scss";
import SearchBar from "../page_sections/SearchBar";

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