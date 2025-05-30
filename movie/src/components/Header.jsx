import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

/* 
    props Drilling(프랍스드릴링) 이란걸 활용한것
    부모에서 자식컴포넌트에 변경함수를 주어서 자식함수에서 변경함수 값을 
    활용해서 값 변경을 하면 부모 함수에서 반응해서 변경값이 바뀐다
 */
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