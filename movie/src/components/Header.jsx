import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Header ({onSearch}) {

    const navi = useNavigate();

    const handleSearchData = (e) => {
        navi("/")
        onSearch(e.target.value)
    }

    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="logo" className="h-10" style={{ height: "40px" }}
                />
            </div>
            <div className="header-right">
                <input type="text" placeholder="Search for movies..." className="search-input" 
                onChange={ handleSearchData } />
            </div>
        </header>
    )
}

export default Header