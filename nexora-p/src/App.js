import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main.js"
import Schedule from "./components/Schedule.js"
import TodoList from "./components/TodoList.js"
import MenuList from "./components/Menu.js"
import { BsSearch, BsFillBellFill } from "react-icons/bs";

function App() {

    /* return (
        <>
			<div className="nexora-app">
				<div className="side-container">
					<div className="side-logo-area">
						<img src="/image/nexora_logo.png"/>
					</div>
					<nav className="side-menu">
						<MenuList />
					</nav>
					<div className="side-footer">
						<p>Made By Nexora</p>
					</div>
				</div>
				<div className="main-container">
					<div className="right-contents-wrap ">
						<div className="right-content-header">
							<div className="header-contents">
								<div className="search-area ">
									<input type="text" className=""/>
									<button className=""><BsSearch className="text-2xl"/></button>
								</div>
								<div className="login-info-wrap">
									<ul>
										<li>
											<button><BsFillBellFill className="text-2xl"/> </button>
										</li>
										<li>
											<button className="login-info-btn">
												<img src="https://placehold.co/50x50" alt="이미지샘플" className="rounded-full"/>
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="right-contents-body">
							<div className="right-contents">
								<Routes>
									<Route path="/" element={<Main/>}/>
									<Route path="/Schedule" element={<Schedule/>} /> 
									<Route path="/TodoList" element={<TodoList/>} />
								</Routes>
								</div>
						</div>
					</div>
				</div>
			</div>
        </>
    ); */

	return (
		<>
			<div className="nexora-app">
				<div className="side-container">
					<div className="side-logo-area">
						<img src="/image/nexora_logo.png"/>
					</div>
					<nav className="side-menu">
						<MenuList />
					</nav>
					<div className="side-footer">
						<p>Made By Nexora</p>
					</div>
				</div>
				<div className="main-container">
					<div className="right-contents-wrap ">
						<div className="right-content">
							<div className="header-contents">
								<div className="right-header">
									<div className="breadcrumb">
										<ul>
											<li>home / </li>
											<li>page1 / </li>
											<li>page2</li>
										</ul>
									</div>
									<div className="login-info-wrap">
										<div className="search-area ">
											<input type="text" className=""/>
											<button className=""><BsSearch className="text-2xl"/></button>
										</div>
										<ul>
											<li>
												<button><BsFillBellFill className="text-2xl"/> </button>
											</li>
											<li>
												<button className="login-info-btn">
													<img src="https://placehold.co/50x50" alt="이미지샘플" className="rounded-full"/>
												</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="right-contents-body">
								<Routes>
									<Route path="/" element={<Main/>}/>
									<Route path="/Schedule" element={<Schedule/>} /> 
									<Route path="/TodoList" element={<TodoList/>} />
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App;
