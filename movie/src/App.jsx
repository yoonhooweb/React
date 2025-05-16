import logo from "./assets/logo.png";

/* movie api : 4572895c */

function App() {
    return (
        <div className="movie-app">
            <header className="header">
                <div className="header-left">
                    <img src={logo} alt="logo" className="h-10" style={{height : "40px"}}/>
                </div>
                <div className="header-right">
                    <input type="text" placeholder="Search for movies..." className="search-input"/>

                </div>
            </header>
        </div>
    );
}

export default App;
