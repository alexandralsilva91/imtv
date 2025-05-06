import { Link } from "react-router";
import Button from "./Button";
import "./navbar.scss"

function NavBar() {
    return (
        <div className="navbar">
            <Link className="navbar__logo" to="/">
                <h1>IMTV</h1>
            </Link>
            <div>
                <Link to="/movies">
                    <Button color="blue">Movies</Button>
                </Link>
                <Link to="/tv">
                    <Button color="yellow">Tv</Button>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;